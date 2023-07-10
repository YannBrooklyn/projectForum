'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      idUser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accountVerified: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      adresseIP: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bannerProfil: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dateConnexion: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dateInscription: {
        allowNull: false,
        type: Sequelize.DATE
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idEquipe: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      
      online: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      photoProfil: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pseudonyme: {
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
    await queryInterface.dropTable('users');
  }
};