"use strict";
const { Practice, User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const practiceId_1 = await Practice.findByPk(1);
    const practiceId_2 = await Practice.findByPk(2);
    const practiceId_3 = await Practice.findByPk(3);
    const userId_1 = await User.findByPk(1);
    const userId_2 = await User.findByPk(2);
    const userId_3 = await User.findByPk(3);

    await queryInterface.bulkInsert("practice_points", [
      {
        practiceId: practiceId_1.id,
        userId: userId_1.id,
        point: 89,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        practiceId: practiceId_2.id,
        userId: userId_2.id,
        point: 95,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        practiceId: practiceId_3.id,
        userId: userId_3.id,
        point: 76,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("practice_points", null, {});
  },
};
