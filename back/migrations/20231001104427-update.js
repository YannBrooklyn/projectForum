'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('categories', 'idTheme', {
      
      type: Sequelize.INTEGER,
      references: {
        model: 'theme',
        key: 'id'
      },
      onDelete:'CASCADE'
    })
    await queryInterface.addColumn('coms', 'idTheme', {
      
      type: Sequelize.INTEGER,
      references: {
        model: 'theme',
        key: 'id'
      },
      onDelete:'CASCADE'
    })
    await queryInterface.addColumn('likescoms', 'idTheme', {
     
      type: Sequelize.INTEGER,
      references: {
        model: 'theme',
        key: 'id'
      },
      onDelete:'CASCADE'
    })
    await queryInterface.addColumn('likesposts', 'idTheme', {
      
      type: Sequelize.INTEGER,
      references: {
        model: 'theme',
        key: 'id'
      },
      onDelete:'CASCADE'
    })
    await queryInterface.addColumn('posts', 'idTheme', {
      
      type: Sequelize.INTEGER,
      references: {
        model: 'theme',
        key: 'id'
      },
      onDelete:'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('posts', 'idTheme')
    await queryInterface.removeColumn('coms', 'idTheme')
    await queryInterface.removeColumn('likesposts', 'idTheme')
    await queryInterface.removeColumn('likescoms', 'idTheme')
    await queryInterface.removeColumn('categories', 'idTheme')
  }
};
