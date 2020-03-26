/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {marketerChargeInstance, marketerChargeAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<marketerChargeInstance, marketerChargeAttribute>('marketerCharge', {
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
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    cash: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    merchant_uid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    imp_uid: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    temporaryState: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    vbanknum: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vbankName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vbankDueDate: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'marketerCharge'
  });
};
