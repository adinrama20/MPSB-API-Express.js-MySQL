"use strict";
const { TheoryMaterial, Practice } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const materialId_1 = await TheoryMaterial.findByPk(1);
    const materialId_2 = await TheoryMaterial.findByPk(2);
    const materialId_3 = await TheoryMaterial.findByPk(3);
    const practiceId_1 = await Practice.findByPk(1);
    const practiceId_2 = await Practice.findByPk(2);
    const practiceId_3 = await Practice.findByPk(3);

    await queryInterface.bulkInsert("theory_practices", [
      {
        materialId: materialId_1.id,
        practiceId: practiceId_1.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        materialId: materialId_2.id,
        practiceId: practiceId_2.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        materialId: materialId_3.id,
        practiceId: practiceId_3.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("theory_practices", null, {});
  },
};
