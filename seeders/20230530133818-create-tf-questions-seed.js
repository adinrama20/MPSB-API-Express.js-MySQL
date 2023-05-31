"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tf_questions", [
      {
        question: "Apakah cara menyelesaikan penjadwalan 1 ini benar?",
        answer: false,
        poin: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Apakah cara menyelesaikan penjadwalan 2 ini benar?",
        answer: true,
        poin: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Apakah cara menyelesaikan penjadwalan 3 ini benar?",
        answer: true,
        poin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tf_questions", null, {});
  },
};
