/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {twitchGame_uncheckedInstance, twitchGame_uncheckedAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<twitchGame_uncheckedInstance, twitchGame_uncheckedAttribute>('twitchGame_unchecked', {
    gameId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'twitchGame_unchecked'
  });
};
