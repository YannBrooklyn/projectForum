'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  coms.init({
    dateCom: DataTypes.DATE,
    idCom: DataTypes.INTEGER,
    idSujet: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    textCom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'coms',
  });
  return coms;
};