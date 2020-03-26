/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {creatorDetail_copyInstance, creatorDetail_copyAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<creatorDetail_copyInstance, creatorDetail_copyAttribute>('creatorDetail_copy', {
    creatorId: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    followers: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    viewer: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    airtime: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    impression: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ctr: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cost: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rip: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    openHour: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    timeGraphData: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contentsGraphData: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    viewerHeatmapData: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'creatorDetail_copy'
  });
};
