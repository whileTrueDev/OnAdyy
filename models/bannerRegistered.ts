/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {bannerRegisteredInstance, bannerRegisteredAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<bannerRegisteredInstance, bannerRegisteredAttribute>('bannerRegistered', {
    bannerId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    marketerId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bannerSrc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    confirmState: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    bannerDenialReason: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bannerDescription: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    companyDescription: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    landingUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bannerCategory: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: 'any'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    regiDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'bannerRegistered'
  });
};
