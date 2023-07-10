'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sujets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sujets.init({
    dateSujet: DataTypes.DATE,
    idCategorie: DataTypes.INTEGER,
    idSujet: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    textSujet: DataTypes.STRING,
    titleSujet: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sujets',
  });
  return sujets;
};