/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {afreecaStreamDetailInstance, afreecaStreamDetailAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<afreecaStreamDetailInstance, afreecaStreamDetailAttribute>('afreecaStreamDetail', {
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bjId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bjNickName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    broadcastId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    startedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    displayQuality: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    viewer: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    mobileViewer: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pcViewer: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'afreecaStreamDetail'
  });
};
