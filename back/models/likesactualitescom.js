'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likesactualitescom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  likesactualitescom.init({
    idActualite: DataTypes.INTEGER,
    idActualiteCom: DataTypes.INTEGER,
    idLikeActualiteCom: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'likesactualitescom',
  });
  return likesactualitescom;
};