'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('likesactualitescoms', {
      idLikeActualiteCom: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idActualite: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idActualiteCom: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idLikeActualiteCom: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idUser: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('likesactualitescoms');
  }
};