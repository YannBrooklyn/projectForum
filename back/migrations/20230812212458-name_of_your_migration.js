'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
   up (queryInterface, Sequelize) {
    
    return Promise.all([
      queryInterface.addColumn('posts', 'idCategoriee',{
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: "categories",
          foreignKey: "id"
        }
      })
    ])
    
    /**
     * Add altering commands here.
    *
    * Example:
    * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },
  
   down (queryInterface, Sequelize) {
    return Promise.all([
       queryInterface.removeColumn('posts', 'textPost'),
       queryInterface.removeColumn('posts', 'id_Categorie')
    ])
    
   
   /**
    * Add reverting commands here.
    *
    * Example:
    * await queryInterface.dropTable('users');
    */
 },
 

};
