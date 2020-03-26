/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {marketerDebitInstance, marketerDebitAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<marketerDebitInstance, marketerDebitAttribute>('marketerDebit', {
    marketerId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    },
    unitPrice: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '1'
    },
    cashAmount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    warning: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'marketerDebit'
  });
};
