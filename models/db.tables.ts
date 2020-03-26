// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  afreecaStreamDetail:def.afreecaStreamDetailModel;
  bannerCheck:def.bannerCheckModel;
  bannerFrames:def.bannerFramesModel;
  bannerRegistered:def.bannerRegisteredModel;
  bannerVisible:def.bannerVisibleModel;
  campaign:def.campaignModel;
  campaignLog:def.campaignLogModel;
  campaignTimestamp:def.campaignTimestampModel;
  categoryCampaign:def.categoryCampaignModel;
  creatorDetail:def.creatorDetailModel;
  creatorCampaign:def.creatorCampaignModel;
  creatorDetail_copy:def.creatorDetail_copyModel;
  creatorIncome:def.creatorIncomeModel;
  creatorInfo:def.creatorInfoModel;
  creatorIncome_closeBeta1:def.creatorIncome_closeBeta1Model;
  creatorLanding:def.creatorLandingModel;
  creatorInfo_closeBeta1:def.creatorInfo_closeBeta1Model;
  creatorNotification:def.creatorNotificationModel;
  creatorPrice:def.creatorPriceModel;
  creatorRoyaltyLevel:def.creatorRoyaltyLevelModel;
  creatorWithdrawal:def.creatorWithdrawalModel;
  landingClick:def.landingClickModel;
  linkRegistered:def.linkRegisteredModel;
  landingClickIp:def.landingClickIpModel;
  kakaoAlimtalk:def.kakaoAlimtalkModel;
  loginStamp:def.loginStampModel;
  manpointClick:def.manpointClickModel;
  marketerCharge:def.marketerChargeModel;
  marketerActionLog:def.marketerActionLogModel;
  marketerDebit:def.marketerDebitModel;
  marketerNotification:def.marketerNotificationModel;
  marketerInfo:def.marketerInfoModel;
  marketerRefund:def.marketerRefundModel;
  marketerTaxBill:def.marketerTaxBillModel;
  marketerTaxBill_copy:def.marketerTaxBill_copyModel;
  publicNotice:def.publicNoticeModel;
  tracking:def.trackingModel;
  sleepMarketer:def.sleepMarketerModel;
  twitchChat:def.twitchChatModel;
  twitchGame:def.twitchGameModel;
  twitchGame_unchecked:def.twitchGame_uncheckedModel;
  twitchStream:def.twitchStreamModel;
  twitchTag:def.twitchTagModel;
  twitchStreamDetail:def.twitchStreamDetailModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    afreecaStreamDetail: seq.import(path.join(__dirname, './afreecaStreamDetail')),
    bannerCheck: seq.import(path.join(__dirname, './bannerCheck')),
    bannerFrames: seq.import(path.join(__dirname, './bannerFrames')),
    bannerRegistered: seq.import(path.join(__dirname, './bannerRegistered')),
    bannerVisible: seq.import(path.join(__dirname, './bannerVisible')),
    campaign: seq.import(path.join(__dirname, './campaign')),
    campaignLog: seq.import(path.join(__dirname, './campaignLog')),
    campaignTimestamp: seq.import(path.join(__dirname, './campaignTimestamp')),
    categoryCampaign: seq.import(path.join(__dirname, './categoryCampaign')),
    creatorDetail: seq.import(path.join(__dirname, './creatorDetail')),
    creatorCampaign: seq.import(path.join(__dirname, './creatorCampaign')),
    creatorDetail_copy: seq.import(path.join(__dirname, './creatorDetail_copy')),
    creatorIncome: seq.import(path.join(__dirname, './creatorIncome')),
    creatorInfo: seq.import(path.join(__dirname, './creatorInfo')),
    creatorIncome_closeBeta1: seq.import(path.join(__dirname, './creatorIncome_closeBeta1')),
    creatorLanding: seq.import(path.join(__dirname, './creatorLanding')),
    creatorInfo_closeBeta1: seq.import(path.join(__dirname, './creatorInfo_closeBeta1')),
    creatorNotification: seq.import(path.join(__dirname, './creatorNotification')),
    creatorPrice: seq.import(path.join(__dirname, './creatorPrice')),
    creatorRoyaltyLevel: seq.import(path.join(__dirname, './creatorRoyaltyLevel')),
    creatorWithdrawal: seq.import(path.join(__dirname, './creatorWithdrawal')),
    landingClick: seq.import(path.join(__dirname, './landingClick')),
    linkRegistered: seq.import(path.join(__dirname, './linkRegistered')),
    landingClickIp: seq.import(path.join(__dirname, './landingClickIp')),
    kakaoAlimtalk: seq.import(path.join(__dirname, './kakaoAlimtalk')),
    loginStamp: seq.import(path.join(__dirname, './loginStamp')),
    manpointClick: seq.import(path.join(__dirname, './manpointClick')),
    marketerCharge: seq.import(path.join(__dirname, './marketerCharge')),
    marketerActionLog: seq.import(path.join(__dirname, './marketerActionLog')),
    marketerDebit: seq.import(path.join(__dirname, './marketerDebit')),
    marketerNotification: seq.import(path.join(__dirname, './marketerNotification')),
    marketerInfo: seq.import(path.join(__dirname, './marketerInfo')),
    marketerRefund: seq.import(path.join(__dirname, './marketerRefund')),
    marketerTaxBill: seq.import(path.join(__dirname, './marketerTaxBill')),
    marketerTaxBill_copy: seq.import(path.join(__dirname, './marketerTaxBill_copy')),
    publicNotice: seq.import(path.join(__dirname, './publicNotice')),
    tracking: seq.import(path.join(__dirname, './tracking')),
    sleepMarketer: seq.import(path.join(__dirname, './sleepMarketer')),
    twitchChat: seq.import(path.join(__dirname, './twitchChat')),
    twitchGame: seq.import(path.join(__dirname, './twitchGame')),
    twitchGame_unchecked: seq.import(path.join(__dirname, './twitchGame_unchecked')),
    twitchStream: seq.import(path.join(__dirname, './twitchStream')),
    twitchTag: seq.import(path.join(__dirname, './twitchTag')),
    twitchStreamDetail: seq.import(path.join(__dirname, './twitchStreamDetail')),
  };
  return tables;
};
