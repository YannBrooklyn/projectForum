'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('messagesprofils', {
      idMessageProfil: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateMessageProfil: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      idUserPoster: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idUserProfil: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      textMessageProfil: {
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
    await queryInterface.dropTable('messagesprofils');
  }
};