"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "John Doe",
        username: "johndoe1",
        email: "doe@gmail.com",
        password: "1234john",
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Deo Morgan",
        username: "deomorgan1",
        email: "morgan@gmail.com",
        password: "1234deo",
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Reol Gerrad",
        username: "reolgerrad1",
        email: "gerrad@gmail.com",
        password: "1234reol",
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
