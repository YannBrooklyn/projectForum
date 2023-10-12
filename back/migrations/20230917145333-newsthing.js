'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'online', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    }),

    await queryInterface.createTable('settings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      generalTextColor: {
        type: Sequelize.STRING,
        allowNull: false
      },

      navbarTextColor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      

      nameForumColor : {
        type: Sequelize.STRING,
        allowNull: false,
      },

      textColorGeneralButton: {
        type: Sequelize.STRING,
        allowNull: false
      },

      textColorDeleteButton: {
        type: Sequelize.STRING,
        allowNull: false
      },

      textColorUpdateButton: {
        type: Sequelize.STRING,
        allowNull: false
      },

      textColorCardMember: {
        type: Sequelize.STRING,
        allowNull: false
      },

      backgroundColorNavbar: {
        type: Sequelize.STRING,
        allowNull: false
      },

      backgroundColorFirst: {
        type: Sequelize.STRING,
        allowNull: false
      },

      backgroundColorSecond: {
        type: Sequelize.STRING,
        allowNull: false
      },

      backgroundColorCadre: {
        type: Sequelize.STRING,
        allowNull: false
      },

      backgroundColorCategorie: {
        type: Sequelize.STRING,
        allowNull: false
      },

      backgroundColorButtonBurger: {
        type: Sequelize.STRING,
        allowNull: false
      },

      backgroundColorGeneralButton: {
        type: Sequelize.STRING,
        allowNull: false
      },

      backgroundColorDeleteButton: {
        type: Sequelize.STRING,
        allowNull: false
      },

      backgroundColorUpdateButton: {
        type: Sequelize.STRING,
        allowNull: false
      },

      backgroundColorCardMember: {
        type: Sequelize.STRING,
        allowNull: false
      },

      backgroundColorZoneText: {
        type: Sequelize.STRING,
        allowNull: false
      },

      iconeDeletePost: {
        type: Sequelize.STRING,
        allowNull: false
      },

      iconeUpdatePost: {
        type: Sequelize.STRING,
        allowNull: false
      },

      iconeLikeTrue: {
        type: Sequelize.STRING,
        allowNull: false
      },

      iconeLikeFalse: {
        type: Sequelize.STRING,
        allowNull: false
      },

      
    })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('settings'),
    await queryInterface.removeColumn('users', "online" )
  }
};
