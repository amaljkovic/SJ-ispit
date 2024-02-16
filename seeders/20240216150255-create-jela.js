'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   //TODO: dodaj jos primera/unosa 
    await queryInterface.bulkInsert('Jelo',
    [
        {id:"1",naziv:"Vegeterijana", opis:"masna", cena: 1200, kategorija_id:1},
        {id:"2",naziv:"Kobasica", opis:"posna", cena: 300, kategorija_id:2}
    ]);
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Jela', null, {});
  }
};
