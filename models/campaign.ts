/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {campaignInstance, campaignAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<campaignInstance, campaignAttribute>('campaign', {
    campaignId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    campaignName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    marketerId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    marketerName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    bannerId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    connectedLinkId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dailyLimit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '-1'
    },
    limitState: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    priorityType: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    optionType: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    onOff: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    deletedState: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    regiDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    stopDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    targetList: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    keyword: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    finDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    selectedTime: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'campaign'
  });
};
