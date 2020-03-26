/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {creatorInfo_closeBeta1Instance, creatorInfo_closeBeta1Attribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<creatorInfo_closeBeta1Instance, creatorInfo_closeBeta1Attribute>('creatorInfo_closeBeta1', {
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
    creatorAccountNumber: {
      type: DataTypes.STRING(50),
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
    }
  }, {
    tableName: 'creatorInfo_closeBeta1'
  });
};
