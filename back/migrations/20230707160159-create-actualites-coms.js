'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('actualitesComs', {
      idActualiteCom: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateActualiteCom: {
        allowNull: false,
        type: Sequelize.DATE
      },
      idActualite: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      
      idUser: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      textActualiteCom: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('actualitesComs');
  }
};