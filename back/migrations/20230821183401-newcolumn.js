'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    

    await queryInterface.addColumn('users', 'idRole', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        foreignKey: "id"
      }
    })
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('users', 'idRole')
  }
};
