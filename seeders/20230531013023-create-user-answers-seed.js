"use strict";
const { User, QuizQuestion } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userId_1 = await User.findByPk(1);
    const userId_2 = await User.findByPk(2);
    const userId_3 = await User.findByPk(3);
    const questId_1 = await QuizQuestion.findByPk(1);
    const questId_2 = await QuizQuestion.findByPk(2);
    const questId_3 = await QuizQuestion.findByPk(3);

    await queryInterface.bulkInsert("user_answers", [
      {
        userId: userId_1.id,
        questId: questId_1.id,
        answer: "a. Mengubah kode program menjadi bahasa mesin",
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userId_2.id,
        questId: questId_2.id,
        answer: "a. FCFS (First-Come, First-Served)",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userId_3.id,
        questId: questId_3.id,
        answer: "d. Multilevel Queue Scheduling",
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("user_answers", null, {});
  },
};
