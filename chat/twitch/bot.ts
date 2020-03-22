import tmi, { ChatUserstate } from 'tmi.js'; // For twitchChat socket server
import io from 'socket.io-client';

import connectDB, { ContractedCreatorsResult } from '../../model/connectDB';
import OnAdScheduler from '../../lib/scheduler';
import { Chat } from './chat.d';

require('dotenv').config();

// configure constants
const ADCHAT_AGREE_STATE = 1;
const BOT_NAME = 'onadyy';
const { PRODUCTION_SOCKET_HOSTNAME } = process.env;
const BOT_OAUTH_TOKEN = process.env.TWITCH_BOT_OAUTH_TOKEN; // onadyy
const JOIN_TIMEOUT = 8000;

interface ChatContainer {
  chatCount: number;
  insertedChatCount: number;
  chatBuffer: Array<Chat>;
}

interface Handlers {
  onConnectedHandler(address: string, port: number): void;
  onMessageHandler(channel: string, userstate: ChatUserstate, message: string, self: boolean): void;
  onDisconnectedHandler(reason: string): void;
  onJoinHandler(channel: string, username: string, self: boolean): void;
  onReconnectHandler(): void;
  onTimeoutHandler(channel: string, username: string, reason: string, duration: number): void;
  onPingHandler(): void;
  onPongHandler(latency: number): void;
}
/**
 * 온애드 트위치 채팅 수집기 v2
 */
class Bot {
  chatBotClient: tmi.Client | null;
  onadSocketClient: SocketIOClient.Socket;
  private runningSchedulers: Array<OnAdScheduler>;
  private joinedChannels: Array<string>;
  private chatContainer: ChatContainer;
  private creators: ContractedCreatorsResult[];
  private handlers: Handlers;
  constructor() { // 인스턴스 속성 정의
    this.chatBotClient = null;
    this.runningSchedulers = [];
    this.joinedChannels = []; // join 채널
    this.creators = [];
    this.chatContainer = {
      chatCount: 0,
      chatBuffer: [], // ... chats
      insertedChatCount: 0,
    };
    this.handlers = {
      // Called every time connected with chat room
      onConnectedHandler: (addr, port): void => {
        console.log(`* Connected to ${addr}:${port}`);
      },
      // Called when Message is accepted
      onMessageHandler: (channel, userstate, msg, self): void => {
        if (self) { return; } // Ignore messages from the bot

        const data = {
          creatorId: userstate['room-id'],
          time: new Date(),
          name: userstate['display-name'],
          userid: userstate['user-id'],
          subscriber: userstate.subscriber,
          manager: userstate.mod,
          badges: userstate.badges,
          text: msg
        };
        // Insert to chatContainer
        this.chatContainer.chatCount += 1;
        this.chatContainer.chatBuffer.push(data);
      },
      // Called when client disconnected
      onDisconnectedHandler: (reason): void => {
        console.log(`Client Disconnected.. ${reason}`);
      },
      // Called when client join channel
      onJoinHandler: (channel, username, self): void => {
        if (self) { // join event from the onad bot
          const channelName = channel.replace('#', '');
          console.log(`[${new Date().toLocaleString()}] join channel: ${channelName}`);
          this.joinedChannels.push(channelName);
        }
      },
      // Called when client reconnected
      onReconnectHandler: (): void => {
        console.log(`[${new Date().toLocaleString()}] client reconnected`);
      },
      // Called when channel timeout
      onTimeoutHandler: (channel, username, reason, duration): void => {
        console.log(`timeout: ${channel}, ${reason}, ${duration}`);
      },
      onPingHandler: (): void => {
        console.log('pingcheck');
      },
      onPongHandler: (latency): void => {
        console.log(`pong ${latency}`);
      },
    };

    try {
      this.onadSocketClient = io(PRODUCTION_SOCKET_HOSTNAME as string);
      console.log('onad banner broad socket connected - ', PRODUCTION_SOCKET_HOSTNAME);
    } catch {
      throw Error('ONAD_SOCKET_HOST needed');
    }
    // onad 배너 송출 socket server 연결
    interface NextCampaignData {
      creatorId: string; creatorTwitchId: string; campaignId: string;
    }
    this.onadSocketClient.on('next-campaigns-twitch-chatbot', (data: NextCampaignData) => {
      // 해당 이벤트 핸들러 따로 관리.
      // 광고 채팅 ON상태인 크리에이터들 하나마다 한번씩 광고메시지 송출.
      if (this.creators.findIndex((c) => c.adChatAgreement === ADCHAT_AGREE_STATE
      && c.creatorTwitchId === data.creatorTwitchId) >= 0) {
        if (data.campaignId && data.creatorTwitchId) {
          const adString = `https://onad.io/adchat/${data.campaignId}/${data.creatorTwitchId}`;
          this.sayAdMessage(data.creatorTwitchId, adString);
          console.log(`[${new Date().toLocaleString()}] adchat to - ${data.creatorTwitchId}`);
        }
      }
    });
  }

  // 광고 메시지 송출 함수
  private sayAdMessage(channel: string, adString: string): void {
    const messageTemplate = '지금 나오고 있는 광고가 궁금하다면?\n';
    const adMessage = `${messageTemplate + adString}`;
    if (this.chatBotClient) {
      this.chatBotClient.say(channel, adMessage);
    }
  }

  runBot(): void {
    connectDB.getContratedCreators()
      .then((creators) => {
        this.creators = creators;
        const contractedChannels = creators.map((creator) => creator.creatorTwitchId);
        console.log(`contractedChannels : ${contractedChannels.length}`);
        const OPTION = {
          debug: true,
          connection: { reconnect: true, secure: true },
          identity: { username: BOT_NAME, password: BOT_OAUTH_TOKEN },
          channels: contractedChannels
          // test
          // channels: ['iamsupermazinga'] // , 'dkdkqwer', 'oxquizzz', 'kevin20222'
        };

        const client = tmi.Client(OPTION);
        this.chatBotClient = client;
        if (this.chatBotClient) {
          this.chatBotClient.on('connected', this.handlers.onConnectedHandler);
          this.chatBotClient.on('join', this.handlers.onJoinHandler);
          this.chatBotClient.on('message', this.handlers.onMessageHandler);
          this.chatBotClient.on('disconnected', this.handlers.onDisconnectedHandler);
          this.chatBotClient.on('reconnect', this.handlers.onReconnectHandler);
          this.chatBotClient.on('ping', this.handlers.onPingHandler);
          this.chatBotClient.on('timeout', this.handlers.onTimeoutHandler);
          this.chatBotClient.connect();
        }
      });
  }

  healthCheck(): void { // 로깅 및 헬스체크 - 1 or 5분 단위
    console.log('=================== healthCheck ====================');
    console.log('[TIME]: ', new Date().toLocaleString());
    console.log(`[Collecting channels]: ${this.joinedChannels.length}`);
    console.log('[All chats on client]: ', this.chatContainer.chatCount);
    console.log('[Chats on collector buffer]: ', this.chatContainer.chatBuffer.length);
    console.log(`[Chats inserted]: ${this.chatContainer.insertedChatCount}`);
    console.log(`[Running Schedulers]: ${this.runningSchedulers.length}`);
  }

  private addNewCreator(): void { // 새로운/정지된 크리에이터 채널에 입장 - 매일 0시 1분.
    console.log('=============== AddNewCreator ===============');
    connectDB.getContratedCreators()
      .then((allCreator) => {
        // 새로운 크리에이터 채널 입장
        let newCreators = allCreator.map((creator) => creator.creatorTwitchId);
        newCreators = newCreators.filter(
          (creator) => !(this.joinedChannels.includes(creator))
        );

        newCreators.forEach((creator, idx) => {
          const anonFunc = (creator1: string): void => {
            setTimeout(() => {
              if (this.chatBotClient) {
                this.chatBotClient.join(creator1)
                  .catch((err: any) => { console.log(`channel join error: ${err}`); });
              }
            }, idx * JOIN_TIMEOUT);
          };
          anonFunc(creator);
        });
      })
      .catch((err) => {
        console.log(`[Error] ${err}`);
      });
  }

  private chatPeriodicInsert(): void { // 주기적 채팅로그 삽입 - 매 10분
    const { chatBuffer } = this.chatContainer;
    console.log('=================== Chat-autoInsert ====================');
    console.log('[TIME]: ', new Date().toLocaleString());
    console.log(`[Request Insert Rows]: ${chatBuffer.length} chats`);

    if (chatBuffer.length > 0) {
      connectDB.insertChats(chatBuffer)
        .then((result) => {
          // result = db OKPacket
          this.chatContainer.insertedChatCount += result.affectedRows;
          console.log(`[Successfully Inserted Rows]: ${result.affectedRows} chats`);
          // cleanup chatBuffer
          this.chatContainer.chatBuffer = [];
        })
        .catch((err) => {
          console.log(`[DB error]: ${err}`);
        });
    } else {
      console.log('[Skip!..]: 채팅데이터없음');
    }
  }

  runScheduler(): void {
    console.log('start schdulejobs!');
    const healthCheckScheduler = new OnAdScheduler(
      'healthcheck', '* * * * *', this.healthCheck.bind(this)
    );
    const addNewCreatorScheduler = new OnAdScheduler(
      'addnewcreator', '1 0 * * *', this.addNewCreator.bind(this)
    );
    const chatPeriodicInsertScheduler = new OnAdScheduler(
      'auatoinsert', '*/10 * * * *', this.chatPeriodicInsert.bind(this)
    );

    this.runningSchedulers = [
      healthCheckScheduler,
      addNewCreatorScheduler,
      chatPeriodicInsertScheduler
    ];
  }

  run(): void {
    this.runBot();
    this.runScheduler();
  }
}
export default Bot;
