/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {bannerFramesInstance, bannerFramesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<bannerFramesInstance, bannerFramesAttribute>('bannerFrames', {
    code: {
      type: DataTypes.INTEGER(10).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bannerId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bannerSrc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'bannerFrames'
  });
};
