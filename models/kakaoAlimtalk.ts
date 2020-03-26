/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {kakaoAlimtalkInstance, kakaoAlimtalkAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<kakaoAlimtalkInstance, kakaoAlimtalkAttribute>('kakaoAlimtalk', {
    messages_messageId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    requestId: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    requestTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    statusCode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    statusName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    messages_countryCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    messages_to: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    messages_content: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    messages_requestStatusCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    messages_requestStatusName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    messages_requestStatusDesc: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'kakaoAlimtalk'
  });
};
