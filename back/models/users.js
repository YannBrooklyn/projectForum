'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.users.hasMany(models.posts, {foreignKey: "idUser", onDelete: "cascade"})
      models.users.hasMany(models.coms, {foreignKey: "idUser", onDelete: "cascade"})
      models.users.belongsTo(models.roles, {foreignKey: "idRole"})
      models.users.hasMany(models.likesposts, {foreignKey: "idUser", onDelete: "cascade"})
      models.users.hasMany(models.likescoms, {foreignKey: "idUser", onDelete: "cascade"})
    }
  }
  users.init({
    pseudo: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    idRole: DataTypes.INTEGER,
    banner: DataTypes.STRING,
    online: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};