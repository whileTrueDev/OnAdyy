/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {twitchStreamDetailInstance, twitchStreamDetailAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<twitchStreamDetailInstance, twitchStreamDetailAttribute>('twitchStreamDetail', {
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    streamId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    streamerName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    viewer: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    gameId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tagIds: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'twitchStreamDetail'
  });
};
