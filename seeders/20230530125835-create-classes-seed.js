"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("classes", [
      {
        class_code: "CH_40",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_code: "CH_50",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_code: "CH_60",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("classes", null, {});
  },
};
