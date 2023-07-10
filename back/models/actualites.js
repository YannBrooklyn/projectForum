'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actualites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  actualites.init({
    dateActualites: DataTypes.STRING,
    idActualite: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    textActualite: DataTypes.STRING,
    titleActualite: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'actualites',
  });
  return actualites;
};