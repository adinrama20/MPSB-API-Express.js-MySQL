"use strict";
const { UserAnswer } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userAnswerId_1 = await UserAnswer.findByPk(1);
    const userAnswerId_2 = await UserAnswer.findByPk(2);
    const userAnswerId_3 = await UserAnswer.findByPk(3);

    await queryInterface.bulkInsert("quiz_points", [
      {
        point: 30,
        userAnswerId: userAnswerId_1.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        point: 50,
        userAnswerId: userAnswerId_2.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        point: 68,
        userAnswerId: userAnswerId_3.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("quiz_points", null, {});
  },
};
