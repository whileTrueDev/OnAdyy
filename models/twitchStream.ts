/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {twitchStreamInstance, twitchStreamAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<twitchStreamInstance, twitchStreamAttribute>('twitchStream', {
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
    streamerId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    streamerName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    startedAt: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'twitchStream'
  });
};
