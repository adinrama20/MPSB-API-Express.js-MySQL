"use strict";
const { TheoryMaterial, TFQuestion } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const materialId_1 = await TheoryMaterial.findByPk(1);
    const materialId_2 = await TheoryMaterial.findByPk(2);
    const materialId_3 = await TheoryMaterial.findByPk(3);
    const tfQuestId_1 = await TFQuestion.findByPk(1);
    const tfQuestId_2 = await TFQuestion.findByPk(2);
    const tfQuestId_3 = await TFQuestion.findByPk(3);

    await queryInterface.bulkInsert("tf_materials", [
      {
        materialId: materialId_1.id,
        tfQuestionId: tfQuestId_1.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        materialId: materialId_2.id,
        tfQuestionId: tfQuestId_2.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        materialId: materialId_3.id,
        tfQuestionId: tfQuestId_3.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tf_materials", null, {});
  },
};
