'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
    });    
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
