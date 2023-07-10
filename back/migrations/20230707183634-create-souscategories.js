'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('souscategories', {
      idSousCategorie: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bannerSousCategorie: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idCategorie: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idSousCategorie: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nameSousCategorie: {
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
    await queryInterface.dropTable('souscategories');
  }
};