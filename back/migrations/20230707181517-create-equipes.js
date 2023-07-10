'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('equipes', {
      idEquipe: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bannir: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      debannir: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      ipAdresse: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      nameEquipe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      panel: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      supprimer: {
        allowNull: false,
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('equipes');
  }
};