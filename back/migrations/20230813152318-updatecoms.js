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
      idPost: {
        type: Sequelize.INTEGER,
        references : {
          model: "posts",
          foreignKey: "idPost"
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
    await queryInterface.dropTable('coms');
  }
};