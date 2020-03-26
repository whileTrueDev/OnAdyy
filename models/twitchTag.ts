/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {twitchTagInstance, twitchTagAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<twitchTagInstance, twitchTagAttribute>('twitchTag', {
    tagId: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    isAuto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    nameKr: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    nameUs: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    descriptionKr: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    descriptionUs: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'twitchTag'
  });
};
