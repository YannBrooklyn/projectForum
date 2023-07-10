'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likesmessagesprofilcoms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  likesmessagesprofilcoms.init({
    idLikeMessageProfilCom: DataTypes.INTEGER,
    idMessageProfilCom: DataTypes.INTEGER,
    idUserPoster: DataTypes.INTEGER,
    idUserProfil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'likesmessagesprofilcoms',
  });
  return likesmessagesprofilcoms;
};