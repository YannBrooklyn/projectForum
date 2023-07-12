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
      models.posts.belongsTo(models.users, {
        foreignKey:"id"
      })
    }
  }
  posts.init({
    textPost: DataTypes.STRING,
    titlePost: DataTypes.STRING,
    imagePost: DataTypes.BLOB,
    idUser: DataTypes.INTEGER,
    idCategorie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};