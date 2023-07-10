'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itemssite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  itemssite.init({
    code: DataTypes.STRING,
    idItemSite: DataTypes.INTEGER,
    image: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'itemssite',
  });
  return itemssite;
};