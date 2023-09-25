'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categorie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.categorie.hasMany(models.posts, {foreignKey: "idCategorie", onDelete: "cascade"})
      models.categorie.hasMany(models.coms, {foreignKey: "idCategorie", onDelete: "cascade"})
      models.categorie.hasMany(models.likesposts, {foreignKey: "idCategorie", onDelete: "cascade"})
      models.categorie.hasMany(models.likescoms, {foreignKey: "idCategorie", onDelete: "cascade"})
    }
  }
  categorie.init({
    nameCategorie: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categorie',
  });
  return categorie;
};