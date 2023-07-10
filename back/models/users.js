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
      // define association here
    }
  }
  users.init({
    accountVerified: DataTypes.BOOLEAN,
    adresseIP: DataTypes.STRING,
    bannerProfil: DataTypes.STRING,
    dateConnexion: DataTypes.DATE,
    dateInscription: DataTypes.DATE,
    email: DataTypes.STRING,
    idEquipe: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    online: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    photoProfil: DataTypes.STRING,
    pseudonyme: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};