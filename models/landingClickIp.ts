/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {landingClickIpInstance, landingClickIpAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<landingClickIpInstance, landingClickIpAttribute>('landingClickIp', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    ipAddress: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    campaignId: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'landingClickIp'
  });
};
