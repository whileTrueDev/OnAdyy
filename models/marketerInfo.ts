/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {marketerInfoInstance, marketerInfoAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<marketerInfoInstance, marketerInfoAttribute>('marketerInfo', {
    marketerId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    platformType: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    marketerName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    marketerMail: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    marketerPhoneNum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    marketerBusinessRegNum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    marketerBusinessRegSrc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    marketerUserType: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    marketerContraction: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    marketerAlarmAgreement: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    marketerEmailAuth: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    temporaryLogin: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    marketerAccountNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    accountHolder: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    marketerSalt: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    marketerPasswd: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    signOutState: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    signOutDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    noticeReadState: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'marketerInfo'
  });
};
