/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {bannerVisibleInstance, bannerVisibleAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<bannerVisibleInstance, bannerVisibleAttribute>('bannerVisible', {
    advertiseUrl: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    visibleState: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    program: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'bannerVisible'
  });
};
