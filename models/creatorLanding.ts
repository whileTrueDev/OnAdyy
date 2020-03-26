/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {creatorLandingInstance, creatorLandingAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<creatorLandingInstance, creatorLandingAttribute>('creatorLanding', {
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    creatorTwitchId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    creatorDesc: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    creatorBackgroundImage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    creatorTheme: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'light'
    }
  }, {
    tableName: 'creatorLanding'
  });
};
