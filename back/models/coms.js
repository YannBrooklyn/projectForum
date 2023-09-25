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
      models.coms.belongsTo(models.users, {
        foreignKey:'idUser'
      }),
      models.coms.belongsTo(models.posts, {
        foreignKey: 'idPost'
      })
      models.coms.hasMany(models.likescoms, {foreignKey: "idCom", onDelete: "cascade"})
    }
  }
  coms.init({
    textComs: DataTypes.STRING,
    imageComs: DataTypes.BLOB,
    idUser: DataTypes.INTEGER,
    idCategorie: DataTypes.INTEGER,
    idPost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'coms',
  });
  return coms;
};