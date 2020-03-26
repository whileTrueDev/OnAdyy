/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {marketerActionLogInstance, marketerActionLogAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<marketerActionLogInstance, marketerActionLogAttribute>('marketerActionLog', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    marketerId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'marketerActionLog'
  });
};
