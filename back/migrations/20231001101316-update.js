'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('settings', 'nameSetting', {
      allowNull: false,
      type: Sequelize.BOOLEAN
    })

    await queryInterface.addColumn('settings', 'activate', {
      allowNull: false,
      type: Sequelize.BOOLEAN
    })
    await queryInterface.createTable('theme', {
      id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER
      },
      nameTheme: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull:false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull:false,
        type: Sequelize.DATE
      }
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('settings', "nameSetting")
    await queryInterface.removeColumn('settings', "activate")
    await queryInterface.dropTable('theme')
  }
};
