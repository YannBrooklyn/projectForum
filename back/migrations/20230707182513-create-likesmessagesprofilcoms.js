'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('likesmessagesprofilcoms', {
      idLikeMessageProfilCom: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      idMessageProfilCom: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idUserPoster: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      idUserProfil: {
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
    await queryInterface.dropTable('likesmessagesprofilcoms');
  }
};