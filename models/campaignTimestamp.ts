/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {campaignTimestampInstance, campaignTimestampAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<campaignTimestampInstance, campaignTimestampAttribute>('campaignTimestamp', {
    code: {
      type: DataTypes.INTEGER(11),
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
    program: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'campaignTimestamp'
  });
};
