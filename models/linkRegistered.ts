/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {linkRegisteredInstance, linkRegisteredAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<linkRegisteredInstance, linkRegisteredAttribute>('linkRegistered', {
    linkId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    marketerId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    confirmState: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    denialReason: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    links: {
      type: DataTypes.TEXT,
      allowNull: true
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
    }
  }, {
    tableName: 'linkRegistered'
  });
};
