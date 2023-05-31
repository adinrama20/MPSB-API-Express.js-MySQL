"use strict";
const { User, TFQuestion } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userId_1 = await User.findByPk(1);
    const userId_2 = await User.findByPk(2);
    const userId_3 = await User.findByPk(3);
    const tfQuestId_1 = await TFQuestion.findByPk(1);
    const tfQuestId_2 = await TFQuestion.findByPk(2);
    const tfQuestId_3 = await TFQuestion.findByPk(3);

    await queryInterface.bulkInsert("tf_users", [
      {
        userId: userId_1.id,
        tfId: tfQuestId_1.id,
        answer: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userId_2.id,
        tfId: tfQuestId_2.id,
        answer: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userId_3.id,
        tfId: tfQuestId_3.id,
        answer: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tf_users", null, {});
  },
};
