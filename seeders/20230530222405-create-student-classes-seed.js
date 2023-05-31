"use strict";
const { User, Class } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userId_1 = await User.findByPk(1);
    const userId_2 = await User.findByPk(2);
    const userId_3 = await User.findByPk(3);
    const classId_1 = await Class.findByPk(1);
    const classId_2 = await Class.findByPk(2);
    const classId_3 = await Class.findByPk(3);

    await queryInterface.bulkInsert("student_classes", [
      {
        userId: userId_1.id,
        classId: classId_1.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userId_2.id,
        classId: classId_2.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userId_3.id,
        classId: classId_3.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("student_classes", null, {});
  },
};
