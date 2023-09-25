'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      textPost: {
        type: Sequelize.STRING
      },
      titlePost: {
        type: Sequelize.STRING
      },
      imagePost: {
        type: Sequelize.BLOB
      },
      idUser: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          foreignKey: "id"
        }
      },
      idCategorie: {
        type: Sequelize.INTEGER,
        references : {
          model: "categorie",
          foreignKey: "id"
        }
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
    await queryInterface.dropTable('posts');
  }
};