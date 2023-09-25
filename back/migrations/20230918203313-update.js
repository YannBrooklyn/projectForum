'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('settings', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('settings', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('settings', 'createdAt')
    await queryInterface.removeColumn('settings', 'updatedAt')
  }
};
