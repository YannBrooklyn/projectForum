'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class designsite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  designsite.init({
    colorBackgroundCategorie: DataTypes.STRING,
    colorBackgroundFooter: DataTypes.STRING,
    colorBackgroundGeneral: DataTypes.STRING,
    colorBackgroundMessagePrive1: DataTypes.STRING,
    colorBackgroundPrive2: DataTypes.STRING,
    colorBackgroundNavbar: DataTypes.STRING,
    colorBackgroundShoutbox: DataTypes.STRING,
    colorMessagePrive: DataTypes.STRING,
    colorMessageShoutbox: DataTypes.STRING,
    colorPoliceText: DataTypes.STRING,
    colorTitleCategorie: DataTypes.STRING,
    colorTitleFooter: DataTypes.STRING,
    colorTitleNavbar: DataTypes.STRING,
    colorTitleTheme: DataTypes.STRING,
    fontGeneral: DataTypes.STRING,
    idDesignSite: DataTypes.INTEGER,
    logoImageSite: DataTypes.STRING,
    logoTextSite: DataTypes.STRING,
    nameSite: DataTypes.STRING,
    imageLogo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'designsite',
  });
  return designsite;
};