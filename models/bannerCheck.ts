/* jshint indent: 2 */
// tslint:disable
import * as sequelize1 from 'sequelize';
import { DataTypes } from 'sequelize';
import { bannerCheckInstance, bannerCheckAttribute } from './db';

module.exports = function (sequelize: sequelize1.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<bannerCheckInstance, bannerCheckAttribute>('bannerCheck', {
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    state: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'bannerCheck'
  });
};
