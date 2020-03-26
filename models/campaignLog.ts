/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {campaignLogInstance, campaignLogAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<campaignLogInstance, campaignLogAttribute>('campaignLog', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    campaignId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: 'CPM'
    },
    cashFromMarketer: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    cashToCreator: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'campaignLog'
  });
};
