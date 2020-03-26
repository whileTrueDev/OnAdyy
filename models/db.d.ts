// tslint:disable
import * as Sequelize from 'sequelize';


// table: afreecaStreamDetail
export interface afreecaStreamDetailAttribute {
  code:number;
  bjId?:string;
  bjNickName?:string;
  broadcastId?:string;
  startedAt?:Date;
  displayQuality?:string;
  title?:string;
  viewer?:number;
  mobileViewer?:number;
  pcViewer?:number;
  time?:Date;
}
export interface afreecaStreamDetailInstance extends Sequelize.Instance<afreecaStreamDetailAttribute>, afreecaStreamDetailAttribute { }
export interface afreecaStreamDetailModel extends Sequelize.Model<afreecaStreamDetailInstance, afreecaStreamDetailAttribute> { }

// table: bannerCheck
export interface bannerCheckAttribute {
  code:number;
  creatorId?:string;
  state?:number;
  date?:Date;
}
export interface bannerCheckInstance extends Sequelize.Instance<bannerCheckAttribute>, bannerCheckAttribute { }
export interface bannerCheckModel extends Sequelize.Model<bannerCheckInstance, bannerCheckAttribute> { }

// table: bannerFrames
export interface bannerFramesAttribute {
  code:number;
  bannerId?:string;
  bannerSrc?:string;
}
export interface bannerFramesInstance extends Sequelize.Instance<bannerFramesAttribute>, bannerFramesAttribute { }
export interface bannerFramesModel extends Sequelize.Model<bannerFramesInstance, bannerFramesAttribute> { }

// table: bannerRegistered
export interface bannerRegisteredAttribute {
  bannerId:string;
  marketerId:string;
  bannerSrc:string;
  confirmState:number;
  bannerDenialReason?:string;
  bannerDescription:string;
  companyDescription:string;
  landingUrl?:string;
  bannerCategory:string;
  date:Date;
  regiDate:Date;
}
export interface bannerRegisteredInstance extends Sequelize.Instance<bannerRegisteredAttribute>, bannerRegisteredAttribute { }
export interface bannerRegisteredModel extends Sequelize.Model<bannerRegisteredInstance, bannerRegisteredAttribute> { }

// table: bannerVisible
export interface bannerVisibleAttribute {
  advertiseUrl:string;
  visibleState:number;
  program:string;
  date:Date;
}
export interface bannerVisibleInstance extends Sequelize.Instance<bannerVisibleAttribute>, bannerVisibleAttribute { }
export interface bannerVisibleModel extends Sequelize.Model<bannerVisibleInstance, bannerVisibleAttribute> { }

// table: campaign
export interface campaignAttribute {
  campaignId:string;
  campaignName:string;
  marketerId:string;
  marketerName:string;
  bannerId:string;
  connectedLinkId?:string;
  dailyLimit:number;
  limitState:number;
  priorityType:number;
  optionType:number;
  onOff:number;
  deletedState:number;
  regiDate:Date;
  updateDate:Date;
  stopDate?:Date;
  targetList?:string;
  keyword?:string;
  startDate?:Date;
  finDate?:Date;
  selectedTime?:string;
}
export interface campaignInstance extends Sequelize.Instance<campaignAttribute>, campaignAttribute { }
export interface campaignModel extends Sequelize.Model<campaignInstance, campaignAttribute> { }

// table: campaignLog
export interface campaignLogAttribute {
  id:number;
  campaignId:string;
  creatorId:string;
  type:string;
  cashFromMarketer:number;
  cashToCreator:number;
  date:Date;
}
export interface campaignLogInstance extends Sequelize.Instance<campaignLogAttribute>, campaignLogAttribute { }
export interface campaignLogModel extends Sequelize.Model<campaignLogInstance, campaignLogAttribute> { }

// table: campaignTimestamp
export interface campaignTimestampAttribute {
  code:number;
  campaignId:string;
  creatorId:string;
  program?:string;
  date:Date;
}
export interface campaignTimestampInstance extends Sequelize.Instance<campaignTimestampAttribute>, campaignTimestampAttribute { }
export interface campaignTimestampModel extends Sequelize.Model<campaignTimestampInstance, campaignTimestampAttribute> { }

// table: categoryCampaign
export interface categoryCampaignAttribute {
  categoryId:number;
  categoryName?:string;
  campaignList?:string;
  emoji?:string;
  state?:number;
}
export interface categoryCampaignInstance extends Sequelize.Instance<categoryCampaignAttribute>, categoryCampaignAttribute { }
export interface categoryCampaignModel extends Sequelize.Model<categoryCampaignInstance, categoryCampaignAttribute> { }

// table: creatorDetail
export interface creatorDetailAttribute {
  creatorId:string;
  followers?:number;
  viewer?:number;
  peakview?:number;
  airtime?:number;
  impression?:number;
  ctr?:number;
  cost?:number;
  rip?:number;
  content?:string;
  openHour?:string;
  timeGraphData?:string;
  contentsGraphData?:string;
  date?:Date;
  viewerHeatmapData?:string;
}
export interface creatorDetailInstance extends Sequelize.Instance<creatorDetailAttribute>, creatorDetailAttribute { }
export interface creatorDetailModel extends Sequelize.Model<creatorDetailInstance, creatorDetailAttribute> { }

// table: creatorCampaign
export interface creatorCampaignAttribute {
  creatorId:string;
  campaignList?:string;
  banList?:string;
}
export interface creatorCampaignInstance extends Sequelize.Instance<creatorCampaignAttribute>, creatorCampaignAttribute { }
export interface creatorCampaignModel extends Sequelize.Model<creatorCampaignInstance, creatorCampaignAttribute> { }

// table: creatorDetail_copy
export interface creatorDetail_copyAttribute {
  creatorId:string;
  followers?:number;
  viewer?:number;
  airtime?:number;
  impression?:number;
  ctr?:number;
  cost?:number;
  rip?:number;
  content?:string;
  openHour?:string;
  timeGraphData?:string;
  contentsGraphData?:string;
  date?:Date;
  viewerHeatmapData?:string;
}
export interface creatorDetail_copyInstance extends Sequelize.Instance<creatorDetail_copyAttribute>, creatorDetail_copyAttribute { }
export interface creatorDetail_copyModel extends Sequelize.Model<creatorDetail_copyInstance, creatorDetail_copyAttribute> { }

// table: creatorIncome
export interface creatorIncomeAttribute {
  code:number;
  creatorId:string;
  creatorTotalIncome:number;
  creatorReceivable:number;
  date:Date;
}
export interface creatorIncomeInstance extends Sequelize.Instance<creatorIncomeAttribute>, creatorIncomeAttribute { }
export interface creatorIncomeModel extends Sequelize.Model<creatorIncomeInstance, creatorIncomeAttribute> { }

// table: creatorInfo
export interface creatorInfoAttribute {
  creatorId:string;
  creatorName:string;
  creatorIp:string;
  creatorMail:string;
  realName:string;
  creatorAccountNumber?:string;
  advertiseUrl?:string;
  creatorAlarmAgreement:number;
  creatorContractionAgreement:number;
  date:Date;
  creatorTwitchId?:string;
  creatorLogo?:string;
  arrested?:number;
  noticeReadState?:number;
  adChatAgreement:number;
}
export interface creatorInfoInstance extends Sequelize.Instance<creatorInfoAttribute>, creatorInfoAttribute { }
export interface creatorInfoModel extends Sequelize.Model<creatorInfoInstance, creatorInfoAttribute> { }

// table: creatorIncome_closeBeta1
export interface creatorIncome_closeBeta1Attribute {
  code:number;
  creatorId:string;
  creatorTotalIncome:number;
  creatorReceivable:number;
  date:Date;
}
export interface creatorIncome_closeBeta1Instance extends Sequelize.Instance<creatorIncome_closeBeta1Attribute>, creatorIncome_closeBeta1Attribute { }
export interface creatorIncome_closeBeta1Model extends Sequelize.Model<creatorIncome_closeBeta1Instance, creatorIncome_closeBeta1Attribute> { }

// table: creatorLanding
export interface creatorLandingAttribute {
  creatorId:string;
  creatorTwitchId?:string;
  creatorDesc:string;
  creatorBackgroundImage?:string;
  creatorTheme:string;
}
export interface creatorLandingInstance extends Sequelize.Instance<creatorLandingAttribute>, creatorLandingAttribute { }
export interface creatorLandingModel extends Sequelize.Model<creatorLandingInstance, creatorLandingAttribute> { }

// table: creatorInfo_closeBeta1
export interface creatorInfo_closeBeta1Attribute {
  creatorId:string;
  creatorName:string;
  creatorIp:string;
  creatorMail:string;
  creatorAccountNumber?:string;
  advertiseUrl?:string;
  creatorAlarmAgreement:number;
  creatorContractionAgreement:number;
  date:Date;
  creatorTwitchId?:string;
  creatorLogo?:string;
}
export interface creatorInfo_closeBeta1Instance extends Sequelize.Instance<creatorInfo_closeBeta1Attribute>, creatorInfo_closeBeta1Attribute { }
export interface creatorInfo_closeBeta1Model extends Sequelize.Model<creatorInfo_closeBeta1Instance, creatorInfo_closeBeta1Attribute> { }

// table: creatorNotification
export interface creatorNotificationAttribute {
  index:number;
  creatorId:string;
  title?:string;
  content?:string;
  readState?:number;
  date?:Date;
}
export interface creatorNotificationInstance extends Sequelize.Instance<creatorNotificationAttribute>, creatorNotificationAttribute { }
export interface creatorNotificationModel extends Sequelize.Model<creatorNotificationInstance, creatorNotificationAttribute> { }

// table: creatorPrice
export interface creatorPriceAttribute {
  creatorId:string;
  grade:number;
  viewerAverageCount:number;
  unitPrice:number;
  date:Date;
}
export interface creatorPriceInstance extends Sequelize.Instance<creatorPriceAttribute>, creatorPriceAttribute { }
export interface creatorPriceModel extends Sequelize.Model<creatorPriceInstance, creatorPriceAttribute> { }

// table: creatorRoyaltyLevel
export interface creatorRoyaltyLevelAttribute {
  creatorId:string;
  level:number;
  exp:number;
  visitCount?:number;
}
export interface creatorRoyaltyLevelInstance extends Sequelize.Instance<creatorRoyaltyLevelAttribute>, creatorRoyaltyLevelAttribute { }
export interface creatorRoyaltyLevelModel extends Sequelize.Model<creatorRoyaltyLevelInstance, creatorRoyaltyLevelAttribute> { }

// table: creatorWithdrawal
export interface creatorWithdrawalAttribute {
  index:number;
  creatorId:string;
  creatorWithdrawalAmount:number;
  date:Date;
  withdrawalState:number;
}
export interface creatorWithdrawalInstance extends Sequelize.Instance<creatorWithdrawalAttribute>, creatorWithdrawalAttribute { }
export interface creatorWithdrawalModel extends Sequelize.Model<creatorWithdrawalInstance, creatorWithdrawalAttribute> { }

// table: landingClick
export interface landingClickAttribute {
  campaignId:string;
  creatorId:string;
  clickCount:number;
  transferCount:number;
  regiDate:Date;
}
export interface landingClickInstance extends Sequelize.Instance<landingClickAttribute>, landingClickAttribute { }
export interface landingClickModel extends Sequelize.Model<landingClickInstance, landingClickAttribute> { }

// table: linkRegistered
export interface linkRegisteredAttribute {
  linkId:string;
  marketerId?:string;
  confirmState?:number;
  denialReason?:string;
  links?:string;
  regiDate:Date;
  updateDate:Date;
}
export interface linkRegisteredInstance extends Sequelize.Instance<linkRegisteredAttribute>, linkRegisteredAttribute { }
export interface linkRegisteredModel extends Sequelize.Model<linkRegisteredInstance, linkRegisteredAttribute> { }

// table: landingClickIp
export interface landingClickIpAttribute {
  id:number;
  type?:number;
  ipAddress:string;
  campaignId?:string;
  creatorId:string;
  date:Date;
}
export interface landingClickIpInstance extends Sequelize.Instance<landingClickIpAttribute>, landingClickIpAttribute { }
export interface landingClickIpModel extends Sequelize.Model<landingClickIpInstance, landingClickIpAttribute> { }

// table: kakaoAlimtalk
export interface kakaoAlimtalkAttribute {
  messages_messageId:string;
  requestId?:string;
  requestTime?:string;
  statusCode?:string;
  statusName?:string;
  messages_countryCode?:string;
  messages_to?:string;
  messages_content?:string;
  messages_requestStatusCode?:string;
  messages_requestStatusName?:string;
  messages_requestStatusDesc?:string;
}
export interface kakaoAlimtalkInstance extends Sequelize.Instance<kakaoAlimtalkAttribute>, kakaoAlimtalkAttribute { }
export interface kakaoAlimtalkModel extends Sequelize.Model<kakaoAlimtalkInstance, kakaoAlimtalkAttribute> { }

// table: loginStamp
export interface loginStampAttribute {
  id:number;
  userId?:string;
  userIp?:string;
  userType?:number;
  date:Date;
}
export interface loginStampInstance extends Sequelize.Instance<loginStampAttribute>, loginStampAttribute { }
export interface loginStampModel extends Sequelize.Model<loginStampInstance, loginStampAttribute> { }

// table: manpointClick
export interface manpointClickAttribute {
  creatorId?:string;
  ipAddress?:string;
  type?:number;
  date?:Date;
}
export interface manpointClickInstance extends Sequelize.Instance<manpointClickAttribute>, manpointClickAttribute { }
export interface manpointClickModel extends Sequelize.Model<manpointClickInstance, manpointClickAttribute> { }

// table: marketerCharge
export interface marketerChargeAttribute {
  id:number;
  marketerId:string;
  type:string;
  cash?:number;
  name:string;
  date?:Date;
  merchant_uid:string;
  imp_uid:string;
  temporaryState:number;
  vbanknum:string;
  vbankName:string;
  vbankDueDate:string;
}
export interface marketerChargeInstance extends Sequelize.Instance<marketerChargeAttribute>, marketerChargeAttribute { }
export interface marketerChargeModel extends Sequelize.Model<marketerChargeInstance, marketerChargeAttribute> { }

// table: marketerActionLog
export interface marketerActionLogAttribute {
  id:number;
  marketerId:string;
  type?:number;
  detail?:string;
  date?:Date;
}
export interface marketerActionLogInstance extends Sequelize.Instance<marketerActionLogAttribute>, marketerActionLogAttribute { }
export interface marketerActionLogModel extends Sequelize.Model<marketerActionLogInstance, marketerActionLogAttribute> { }

// table: marketerDebit
export interface marketerDebitAttribute {
  marketerId:string;
  unitPrice:any;
  cashAmount:number;
  warning:number;
  date?:Date;
}
export interface marketerDebitInstance extends Sequelize.Instance<marketerDebitAttribute>, marketerDebitAttribute { }
export interface marketerDebitModel extends Sequelize.Model<marketerDebitInstance, marketerDebitAttribute> { }

// table: marketerNotification
export interface marketerNotificationAttribute {
  index:number;
  marketerId?:string;
  title?:string;
  content?:string;
  readState?:number;
  date?:Date;
}
export interface marketerNotificationInstance extends Sequelize.Instance<marketerNotificationAttribute>, marketerNotificationAttribute { }
export interface marketerNotificationModel extends Sequelize.Model<marketerNotificationInstance, marketerNotificationAttribute> { }

// table: marketerInfo
export interface marketerInfoAttribute {
  marketerId:string;
  platformType?:number;
  marketerName?:string;
  marketerMail?:string;
  marketerPhoneNum?:string;
  marketerBusinessRegNum?:string;
  marketerBusinessRegSrc?:string;
  marketerUserType?:number;
  marketerContraction?:number;
  marketerAlarmAgreement?:number;
  marketerEmailAuth?:number;
  date?:Date;
  temporaryLogin?:number;
  marketerAccountNumber?:string;
  accountHolder?:string;
  marketerSalt?:string;
  marketerPasswd?:string;
  signOutState:number;
  signOutDate?:Date;
  noticeReadState?:number;
}
export interface marketerInfoInstance extends Sequelize.Instance<marketerInfoAttribute>, marketerInfoAttribute { }
export interface marketerInfoModel extends Sequelize.Model<marketerInfoInstance, marketerInfoAttribute> { }

// table: marketerRefund
export interface marketerRefundAttribute {
  id:number;
  marketerId:string;
  cash:number;
  date?:Date;
  check:number;
}
export interface marketerRefundInstance extends Sequelize.Instance<marketerRefundAttribute>, marketerRefundAttribute { }
export interface marketerRefundModel extends Sequelize.Model<marketerRefundInstance, marketerRefundAttribute> { }

// table: marketerTaxBill
export interface marketerTaxBillAttribute {
  id:number;
  marketerId:string;
  date:Date;
  state:number;
  cashAmount?:number;
  updateDate:Date;
}
export interface marketerTaxBillInstance extends Sequelize.Instance<marketerTaxBillAttribute>, marketerTaxBillAttribute { }
export interface marketerTaxBillModel extends Sequelize.Model<marketerTaxBillInstance, marketerTaxBillAttribute> { }

// table: marketerTaxBill_copy
export interface marketerTaxBill_copyAttribute {
  id:number;
  marketerId:string;
  date:Date;
  state:number;
  cashAmount?:number;
  updateDate:Date;
}
export interface marketerTaxBill_copyInstance extends Sequelize.Instance<marketerTaxBill_copyAttribute>, marketerTaxBill_copyAttribute { }
export interface marketerTaxBill_copyModel extends Sequelize.Model<marketerTaxBill_copyInstance, marketerTaxBill_copyAttribute> { }

// table: publicNotice
export interface publicNoticeAttribute {
  code:number;
  topic:string;
  title:string;
  contents:string;
  regiDate:Date;
}
export interface publicNoticeInstance extends Sequelize.Instance<publicNoticeAttribute>, publicNoticeAttribute { }
export interface publicNoticeModel extends Sequelize.Model<publicNoticeInstance, publicNoticeAttribute> { }

// table: tracking
export interface trackingAttribute {
  id:number;
  clickedTime:Date;
  conversionTime?:Date;
  action?:string;
  linkId?:string;
  marketerId?:string;
  campaignId?:string;
  campaignName?:string;
  creatorId?:string;
  creatorTwitchId?:string;
  ip?:string;
  device?:string;
  os?:string;
  os_version?:string;
  browser?:string;
  browser_version?:string;
  browser_engine?:string;
  browser_engine_version?:string;
  payout?:number;
}
export interface trackingInstance extends Sequelize.Instance<trackingAttribute>, trackingAttribute { }
export interface trackingModel extends Sequelize.Model<trackingInstance, trackingAttribute> { }

// table: sleepMarketer
export interface sleepMarketerAttribute {
  marketerId:string;
  marketerPasswd:string;
  marketerSalt:string;
  marketerName:string;
  marketerMail:string;
  marketerPhoneNum:string;
  marketerBusinessRegNum?:string;
  marketerBusinessRegSrc?:string;
  marketerUserType:number;
  marketerContraction:number;
  marketerAlarmAgreement:number;
  marketerEmailAuth:number;
  date:Date;
  temporaryLogin:number;
  marketerAccountNumber?:string;
  accountHolder:string;
  movedDate?:Date;
}
export interface sleepMarketerInstance extends Sequelize.Instance<sleepMarketerAttribute>, sleepMarketerAttribute { }
export interface sleepMarketerModel extends Sequelize.Model<sleepMarketerInstance, sleepMarketerAttribute> { }

// table: twitchChat
export interface twitchChatAttribute {
  id:number;
  creatorId:string;
  time:Date;
  name:string;
  userId:string;
  subscriber:number;
  manager:number;
  badges?:string;
  text:string;
}
export interface twitchChatInstance extends Sequelize.Instance<twitchChatAttribute>, twitchChatAttribute { }
export interface twitchChatModel extends Sequelize.Model<twitchChatInstance, twitchChatAttribute> { }

// table: twitchGame
export interface twitchGameAttribute {
  code:number;
  gameId?:string;
  gameName?:string;
  gameNameKr?:string;
  boxArt?:string;
  date?:Date;
}
export interface twitchGameInstance extends Sequelize.Instance<twitchGameAttribute>, twitchGameAttribute { }
export interface twitchGameModel extends Sequelize.Model<twitchGameInstance, twitchGameAttribute> { }

// table: twitchGame_unchecked
export interface twitchGame_uncheckedAttribute {
  gameId:string;
  creatorId:string;
  date?:Date;
}
export interface twitchGame_uncheckedInstance extends Sequelize.Instance<twitchGame_uncheckedAttribute>, twitchGame_uncheckedAttribute { }
export interface twitchGame_uncheckedModel extends Sequelize.Model<twitchGame_uncheckedInstance, twitchGame_uncheckedAttribute> { }

// table: twitchStream
export interface twitchStreamAttribute {
  code:number;
  streamId?:string;
  streamerId?:string;
  streamerName?:string;
  startedAt?:string;
}
export interface twitchStreamInstance extends Sequelize.Instance<twitchStreamAttribute>, twitchStreamAttribute { }
export interface twitchStreamModel extends Sequelize.Model<twitchStreamInstance, twitchStreamAttribute> { }

// table: twitchTag
export interface twitchTagAttribute {
  tagId:string;
  isAuto:number;
  nameKr?:string;
  nameUs:string;
  descriptionKr?:string;
  descriptionUs:string;
  date:Date;
}
export interface twitchTagInstance extends Sequelize.Instance<twitchTagAttribute>, twitchTagAttribute { }
export interface twitchTagModel extends Sequelize.Model<twitchTagInstance, twitchTagAttribute> { }

// table: twitchStreamDetail
export interface twitchStreamDetailAttribute {
  code:number;
  streamId?:string;
  streamerName?:string;
  viewer?:number;
  title?:string;
  gameId?:string;
  tagIds?:string;
  time?:Date;
}
export interface twitchStreamDetailInstance extends Sequelize.Instance<twitchStreamDetailAttribute>, twitchStreamDetailAttribute { }
export interface twitchStreamDetailModel extends Sequelize.Model<twitchStreamDetailInstance, twitchStreamDetailAttribute> { }
