'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actualitesComs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  actualitesComs.init({
    dateActualiteCom: DataTypes.DATE,
    idActualite: DataTypes.INTEGER,
    idActualiteCom: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    textActualiteCom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'actualitesComs',
  });
  return actualitesComs;
};