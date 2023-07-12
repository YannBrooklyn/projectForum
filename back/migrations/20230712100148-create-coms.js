'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      textComs: {
        type: Sequelize.STRING
      },
      imageComs: {
        type: Sequelize.BLOB
      },
      idUser: {
        type: Sequelize.INTEGER
      },
      idCategorie: {
        type: Sequelize.INTEGER
      },
      idPost: {
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
    await queryInterface.dropTable('coms');
  }
};