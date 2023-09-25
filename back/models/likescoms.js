'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likescoms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.likescoms.belongsTo(models.users, {foreignKey: "idUser"})
      models.likescoms.belongsTo(models.posts, {foreignKey: "idPost"})
      models.likescoms.belongsTo(models.categorie, {foreignKey: "idCategorie"})
      models.likescoms.belongsTo(models.coms, {foreignKey: "idCom"})
    }
  }
  likescoms.init({
    idUser: DataTypes.INTEGER,
    idCom: DataTypes.INTEGER,
    idPost: DataTypes.INTEGER,
    idCategorie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'likescoms',
  });
  return likescoms;
};