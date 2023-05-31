"use strict";
const { Class } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const id_1 = await Class.findByPk(1);
    const id_2 = await Class.findByPk(2);
    const id_3 = await Class.findByPk(3);

    await queryInterface.bulkInsert("theory_materials", [
      {
        classId: id_1.id,
        name: "Theory Material 1",
        material_file: "file materi 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classId: id_2.id,
        name: "Theory Material 2",
        material_file: "file materi 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        classId: id_3.id,
        name: "Theory Material 3",
        material_file: "file materi 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("theory_materials", null, {});
  },
};
