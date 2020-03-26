/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {creatorCampaignInstance, creatorCampaignAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<creatorCampaignInstance, creatorCampaignAttribute>('creatorCampaign', {
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    campaignList: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    banList: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'creatorCampaign'
  });
};
