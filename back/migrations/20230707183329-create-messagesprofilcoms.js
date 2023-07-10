'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('messagesprofilcoms', {
      idMessageProfilCom: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateMessagesProfilCom: {
        allowNull: false,
        type: Sequelize.DATE
      },
      idMessageProfil: {
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
      textMessageProfilCom: {
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
    await queryInterface.dropTable('messagesprofilcoms');
  }
};