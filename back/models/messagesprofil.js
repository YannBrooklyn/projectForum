'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messagesprofil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  messagesprofil.init({
    dateMessageProfil: DataTypes.DATE,
    idMessageProfil: DataTypes.INTEGER,
    idUserPoster: DataTypes.INTEGER,
    idUserProfil: DataTypes.INTEGER,
    textMessageProfil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'messagesprofil',
  });
  return messagesprofil;
};