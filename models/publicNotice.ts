/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {publicNoticeInstance, publicNoticeAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<publicNoticeInstance, publicNoticeAttribute>('publicNotice', {
    code: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    topic: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '공지'
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '공지사항'
    },
    contents: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    regiDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'publicNotice'
  });
};
