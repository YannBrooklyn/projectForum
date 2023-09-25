'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('coms', 'idCategorie', {
      type: Sequelize.INTEGER,
      references: {
        model: 'categories', 
        key: 'id', 
      },
      onDelete: 'CASCADE',
   });

  await queryInterface.addColumn('posts', 'idCategorie', {
    type: Sequelize.INTEGER,
    references: {
      model: 'categories', 
      key: 'id', 
    },
    onDelete: 'CASCADE',
  });

  await queryInterface.addColumn('likesposts', 'idCategorie', {
    type: Sequelize.INTEGER,
    references: {
      model: 'categories', 
      key: 'id', 
    },
    onDelete: 'CASCADE',
  });

    await queryInterface.addColumn('likescoms', 'idCategorie', {
      type: Sequelize.INTEGER,
      references: {
        model: 'categories', 
        key: 'id', 
      },
      onDelete: 'CASCADE',
    });
  
  await queryInterface.addColumn('likescoms', 'idCom', {
    type: Sequelize.INTEGER,
    references: {
      model: 'coms', 
      key: 'id', 
    },
    onDelete: 'CASCADE',
  });


  await queryInterface.addColumn('coms', 'idPost', {
    type: Sequelize.INTEGER,
    references: {
      model: 'posts', 
      key: 'id', 
    },
    onDelete: 'CASCADE',
  });

  await queryInterface.addColumn('likesposts', 'idPost', {
    type: Sequelize.INTEGER,
    references: {
      model: 'posts', 
      key: 'id', 
    },
    onDelete: 'CASCADE',
  });

  await queryInterface.addColumn('likescoms', 'idPost', {
    type: Sequelize.INTEGER,
    references: {
      model: 'posts', 
      key: 'id', 
    },
    onDelete: 'CASCADE',
  });

  await queryInterface.addColumn('users', 'idRole', {
    type: Sequelize.INTEGER,
    references: {
      model: 'roles', 
      key: 'id', 
    },
    onDelete: 'CASCADE',
  });

  await queryInterface.addColumn('posts', 'idUser', {
    type: Sequelize.INTEGER,
    references: {
      model: 'users', 
      key: 'id', 
    },
    onDelete: 'CASCADE',
  });

  await queryInterface.addColumn('coms', 'idUser', {
    type: Sequelize.INTEGER,
    references: {
      model: 'users', 
      key: 'id', 
    },
    onDelete: 'CASCADE',
  });

  await queryInterface.addColumn('likesposts', 'idUser', {
    type: Sequelize.INTEGER,
    references: {
      model: 'users', 
      key: 'id', 
    },
    onDelete: 'CASCADE',
  });

  await queryInterface.addColumn('likescoms', 'idUser', {
    type: Sequelize.INTEGER,
    references: {
      model: 'users', 
      key: 'id', 
    },
    onDelete: 'CASCADE',
  });
    

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('coms', 'idCategorie')
    await queryInterface.removeColumn('posts', 'idCategorie')
    await queryInterface.removeColumn('likesposts', 'idCategorie')
    await queryInterface.removeColumn('likescoms', 'idCategorie')
    await queryInterface.removeColumn('likescoms', 'idCom')
    await queryInterface.removeColumn('coms', 'idPost')
    await queryInterface.removeColumn('likesposts', 'idPost')
    await queryInterface.removeColumn('likescoms', 'idPost')
    await queryInterface.removeColumn('users', 'idRole')
    await queryInterface.removeColumn('posts', 'idUser')
    await queryInterface.removeColumn('coms', 'idUser')
    await queryInterface.removeColumn('likesposts', 'idUser')
    await queryInterface.removeColumn('likescoms', 'idUser')
  }
};
