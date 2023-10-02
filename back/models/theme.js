'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class themes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.themes.hasMany(models.posts, {foreignKey: "idTheme", onDelete: "cascade"})
      models.themes.hasMany(models.coms, {foreignKey: "idTheme", onDelete: "cascade"})
      models.themes.hasMany(models.likesposts, {foreignKey: "idTheme", onDelete: "cascade"})
      models.themes.hasMany(models.likescoms, {foreignKey: "idTheme", onDelete: "cascade"})
      models.themes.hasMany(models.categorie, {foreignKey: "idTheme", onDelete: "cascade"})
    }
  }
  themes.init({
    nameTheme: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'themes',
  });
  return themes;
};