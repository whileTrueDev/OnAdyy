/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {twitchGameInstance, twitchGameAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<twitchGameInstance, twitchGameAttribute>('twitchGame', {
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gameId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gameName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    gameNameKr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    boxArt: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'twitchGame'
  });
};
