'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.posts.belongsTo(models.users, {foreignKey:"idUser"}),
      models.posts.belongsTo(models.categorie, {foreignKey:"idCategorie"}),
      models.posts.hasMany(models.coms, {foreignKey: "idPost", onDelete: "cascade"})
      models.posts.hasMany(models.likesposts, {foreignKey: "idPost", onDelete: "cascade"})
      models.posts.hasMany(models.likescoms, {foreignKey: "idPost", onDelete: "cascade"})
      models.posts.belongsTo(models.themes, {
        foreignKey: 'idTheme'
      })
    }
  }
  posts.init({
    textPost: DataTypes.STRING,
    titlePost: DataTypes.STRING,
    imagePost: DataTypes.BLOB,
    idUser: DataTypes.INTEGER,
    idCategorie: DataTypes.INTEGER,
    idTheme: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};