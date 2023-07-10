'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messagesshoutbox extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  messagesshoutbox.init({
    dateMessageShoutbox: DataTypes.DATE,
    idMessageShoutbox: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    textMessageShoutbox: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'messagesshoutbox',
  });
  return messagesshoutbox;
};