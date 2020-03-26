/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import { DataTypes } from 'sequelize';
import { trackingInstance, trackingAttribute } from './db';

module.exports = function (sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<trackingInstance, trackingAttribute>('tracking', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    clickedTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    conversionTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    linkId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    marketerId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    campaignId: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    campaignName: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    creatorTwitchId: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    device: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    os: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    os_version: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    browser: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    browser_version: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    browser_engine: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    browser_engine_version: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payout: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tracking'
  });
};
