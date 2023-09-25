'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    

    await queryInterface.addColumn('roles', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false
    })

    await queryInterface.addColumn('roles', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('roles', 'createdAt')
    await queryInterface.removeColumn('roles', 'updatedAt')
  }
};
