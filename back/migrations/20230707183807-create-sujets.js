'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sujets', {
      idSujet: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateSujet: {
        allowNull: false,
        type: Sequelize.DATE
      },
      idCategorie: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      
      idUser: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      textSujet: {
        allowNull: false,
        type: Sequelize.STRING
      },
      titleSujet: {
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
    await queryInterface.dropTable('sujets');
  }
};