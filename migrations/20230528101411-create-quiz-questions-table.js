"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("quiz_questions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      quizId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "quizzes",
          },
          key: "id",
        },
      },
      question: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      optionA: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      optionB: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      optionC: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      optionD: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      questKey: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("quiz_questions");
  },
};
