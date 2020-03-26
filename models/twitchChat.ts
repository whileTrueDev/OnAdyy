/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {twitchChatInstance, twitchChatAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<twitchChatInstance, twitchChatAttribute>('twitchChat', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    name: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ''
    },
    userId: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ''
    },
    subscriber: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    manager: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    badges: {
      type: DataTypes.STRING(144),
      allowNull: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'twitchChat'
  });
};
