/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {creatorIncome_closeBeta1Instance, creatorIncome_closeBeta1Attribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<creatorIncome_closeBeta1Instance, creatorIncome_closeBeta1Attribute>('creatorIncome_closeBeta1', {
    code: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    creatorTotalIncome: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    creatorReceivable: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'creatorIncome_closeBeta1'
  });
};
