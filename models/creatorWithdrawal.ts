/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {creatorWithdrawalInstance, creatorWithdrawalAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<creatorWithdrawalInstance, creatorWithdrawalAttribute>('creatorWithdrawal', {
    index: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    creatorWithdrawalAmount: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    withdrawalState: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'creatorWithdrawal'
  });
};
