'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class widgets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  widgets.init({
    actif: DataTypes.BOOLEAN,
    idWidget: DataTypes.INTEGER,
    nameWidget: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'widgets',
  });
  return widgets;
};