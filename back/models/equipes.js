'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  equipes.init({
    bannir: DataTypes.BOOLEAN,
    debannir: DataTypes.BOOLEAN,
    idEquipe: DataTypes.INTEGER,
    ipAdresse: DataTypes.BOOLEAN,
    nameEquipe: DataTypes.STRING,
    panel: DataTypes.BOOLEAN,
    supprimer: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'equipes',
  });
  return equipes;
};