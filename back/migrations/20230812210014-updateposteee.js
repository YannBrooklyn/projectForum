'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   down (queryInterface, Sequelize) {
       queryInterface.removeColumn('posts', 'id_Categorie'),
       queryInterface.removeColumn('posts', 'idCategorie')
    
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },

   up (queryInterface, Sequelize) {
    
      
    
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },
  
 

};

