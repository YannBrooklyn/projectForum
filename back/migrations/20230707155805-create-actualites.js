'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('actualites', {
      idActualite: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateActualites: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      idUser: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      textActualite: {
        allowNull: false,
        type: Sequelize.STRING
      },
      titleActualite: {
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
    await queryInterface.dropTable('actualites');
  }
};