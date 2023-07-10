'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('designsites', {
      idDesignSite: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      colorBackgroundCategorie: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorBackgroundFooter: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorBackgroundGeneral: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorBackgroundMessagePrive1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorBackgroundPrive2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorBackgroundNavbar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorBackgroundShoutbox: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorMessagePrive: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorMessageShoutbox: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorPoliceText: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorTitleCategorie: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorTitleFooter: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorTitleNavbar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      colorTitleTheme: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fontGeneral: {
        allowNull: false,
        type: Sequelize.STRING
      },
      
      logoImageSite: {
        allowNull: false,
        type: Sequelize.STRING
      },
      logoTextSite: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nameSite: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imageLogo: {
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
    await queryInterface.dropTable('designsites');
  }
};