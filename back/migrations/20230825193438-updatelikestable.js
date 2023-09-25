'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('likescoms', 'idUser', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        foreignKey: "id"
      }
    })

    await queryInterface.addColumn('likescoms', 'idCom', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "coms",
        foreignKey: "id"
      }
    })

    await queryInterface.addColumn('likescoms', 'idCategorie', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        foreignKey: "id"
      }
    })

    await queryInterface.addColumn('likescoms', 'idPost', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "posts",
        foreignKey: "id"
      }
    })

    await queryInterface.addColumn('likesposts', 'idUser', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        foreignKey: "id"
      }
    })

    await queryInterface.addColumn('likesposts', 'idCategorie', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        foreignKey: "id"
      }
    })
    
    await queryInterface.addColumn('likesposts', 'idPost', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "posts",
        foreignKey: "id"
      }
    })

    
  },

  

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('likescoms', 'idUser')
    await queryInterface.removeColumn('likescoms', 'idPost')
    await queryInterface.removeColumn('likescoms', 'idComs')
    await queryInterface.removeColumn('likescoms', 'idCategorie')

    await queryInterface.removeColumn('likesposts', 'idUser')
    await queryInterface.removeColumn('likesposts', 'idPost')
    await queryInterface.removeColumn('likesposts', 'idCategorie')
    
    await queryInterface.removeColumn('users', 'isAdmin')
  }
};
