"use strict";
const { TheoryMaterial } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const materialId_1 = await TheoryMaterial.findByPk(1);
    const materialId_2 = await TheoryMaterial.findByPk(2);
    const materialId_3 = await TheoryMaterial.findByPk(3);

    await queryInterface.bulkInsert("quizzes", [
      {
        name: "Kuis 1",
        materialId: materialId_1.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kuis 2",
        materialId: materialId_2.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kuis 3",
        materialId: materialId_3.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("quizzes", null, {});
  },
};
