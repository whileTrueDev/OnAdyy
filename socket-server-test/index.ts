import http from 'http';
import express from 'express';
import io from 'socket.io';

const app = express();

app.use('/', (req, res, next) => {
  console.log('headers: ', req.headers);
});

const httpServer = http.createServer(app).listen(3005, () => {
  console.log('포트 3000에 연결되었습니다.');
});

const socketServer = io(httpServer);
socketServer.on('connection', (socket) => {
  console.log('connect client by Socket.io');
  console.log(socket.id);


  socket.on('request next campaign', () => {
    console.log('request next campaign ');

    socket.emit('next-campaigns-twitch-chatbot', [
      { creatorId: '130096343', creatorTwitchId: 'iamsupermazinga', campaignId: '107511687333993136761_c14' },
      { creatorId: '163657685', creatorTwitchId: 'dkdkqwer', campaignId: '107511687333993136761_c14' },
      { creatorId: '173919802', creatorTwitchId: 'kevin20222', campaignId: '107511687333993136761_c14' },
    ]);
  });
});
