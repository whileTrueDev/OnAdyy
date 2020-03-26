/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {categoryCampaignInstance, categoryCampaignAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<categoryCampaignInstance, categoryCampaignAttribute>('categoryCampaign', {
    categoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    categoryName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    campaignList: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    emoji: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'categoryCampaign'
  });
};
