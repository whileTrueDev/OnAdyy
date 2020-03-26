/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {sleepMarketerInstance, sleepMarketerAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<sleepMarketerInstance, sleepMarketerAttribute>('sleepMarketer', {
    marketerId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    marketerPasswd: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    marketerSalt: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    marketerName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    marketerMail: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    marketerPhoneNum: {
      type: DataTypes.STRING(50),
      allowNull: false
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
      allowNull: false,
      defaultValue: '0'
    },
    marketerContraction: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    marketerAlarmAgreement: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    marketerEmailAuth: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    temporaryLogin: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    marketerAccountNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    accountHolder: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    movedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'sleepMarketer'
  });
};
