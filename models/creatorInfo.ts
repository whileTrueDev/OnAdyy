/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {creatorInfoInstance, creatorInfoAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<creatorInfoInstance, creatorInfoAttribute>('creatorInfo', {
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    creatorName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    creatorIp: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    creatorMail: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    realName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    creatorAccountNumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    advertiseUrl: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    creatorAlarmAgreement: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    creatorContractionAgreement: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    creatorTwitchId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    creatorLogo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    arrested: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    noticeReadState: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    adChatAgreement: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'creatorInfo'
  });
};
