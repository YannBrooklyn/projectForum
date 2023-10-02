'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  settings.init({
    generalTextColor: DataTypes.STRING,
    navbarTextColor: DataTypes.STRING,
    nameForumColor: DataTypes.STRING,
    textColorGeneralButton: DataTypes.STRING,
    textColorDeleteButton: DataTypes.STRING,
    textColorUpdateButton: DataTypes.STRING,
    textColorCardMember: DataTypes.STRING,
    backgroundColorNavbar: DataTypes.STRING,
    backgroundColorFirst: DataTypes.STRING,
    backgroundColorSecond: DataTypes.STRING,
    backgroundColorCadre: DataTypes.STRING,
    backgroundColorCategorie: DataTypes.STRING,
    backgroundColorButtonBurger: DataTypes.STRING,
    backgroundColorGeneralButton: DataTypes.STRING,
    backgroundColorDeleteButton: DataTypes.STRING,
    backgroundColorUpdateButton: DataTypes.STRING,
    backgroundColorCardMember: DataTypes.STRING,
    backgroundColorZoneText: DataTypes.STRING,
    iconeDeletePost: DataTypes.STRING,
    iconeUpdatePost: DataTypes.STRING,
    iconeLikeTrue: DataTypes.STRING,
    iconeLikeFalse: DataTypes.STRING,
    backgroundColorThird: DataTypes.STRING,
    nameForum: DataTypes.STRING,
    activate: DataTypes.BOOLEAN,
    nameSetting: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'settings',
  });
  return settings;
};