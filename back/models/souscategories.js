'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class souscategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  souscategories.init({
    bannerSousCategorie: DataTypes.STRING,
    idCategorie: DataTypes.INTEGER,
    idSousCategorie: DataTypes.INTEGER,
    nameSousCategorie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'souscategories',
  });
  return souscategories;
};