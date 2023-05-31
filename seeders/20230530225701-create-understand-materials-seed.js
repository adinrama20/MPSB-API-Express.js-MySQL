"use strict";
const { TheoryMaterial, TFUser } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const materialId_1 = await TheoryMaterial.findByPk(1);
    const materialId_2 = await TheoryMaterial.findByPk(2);
    const materialId_3 = await TheoryMaterial.findByPk(3);
    const tfUserId_1 = await TFUser.findByPk(1);
    const tfUserId_2 = await TFUser.findByPk(2);
    const tfUserId_3 = await TFUser.findByPk(3);

    await queryInterface.bulkInsert("understand_materials", [
      {
        materialId: materialId_1.id,
        tfUserId: tfUserId_1.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        materialId: materialId_2.id,
        tfUserId: tfUserId_2.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        materialId: materialId_3.id,
        tfUserId: tfUserId_3.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("understand_materials", null, {});
  },
};
