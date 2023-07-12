'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likesposts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  likesposts.init({
    idUser: DataTypes.INTEGER,
    idCategorie: DataTypes.INTEGER,
    idPost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'likesposts',
  });
  return likesposts;
};