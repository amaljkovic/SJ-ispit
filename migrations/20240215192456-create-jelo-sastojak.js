'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JeloSastojak', {
      
      sastojak_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: false
      },
      jelo_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JeloSastojak');
  }
};