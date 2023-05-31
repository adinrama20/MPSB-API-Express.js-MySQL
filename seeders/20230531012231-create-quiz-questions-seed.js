"use strict";
const { Quiz } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const quizId_1 = await Quiz.findByPk(1);
    const quizId_2 = await Quiz.findByPk(2);
    const quizId_3 = await Quiz.findByPk(3);

    await queryInterface.bulkInsert("quiz_questions", [
      {
        quizId: quizId_1.id,
        question: "Dalam sistem operasi komputer, penjadwalan adalah proses...",
        optionA: "a. Mengubah kode program menjadi bahasa mesin",
        optionB: "b. Menetapkan urutan eksekusi tugas-tugas yang ada",
        optionC: "c. Melakukan transfer data antara CPU dan memori",
        optionD: "d. Menghubungkan perangkat input/output dengan komputer",
        questKey: "b. Menetapkan urutan eksekusi tugas-tugas yang ada",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: quizId_2.id,
        question:
          "Algoritma penjadwalan Round Robin adalah contoh dari jenis penjadwalan...",
        optionA: "a. FCFS (First-Come, First-Served)",
        optionB: "b. SJF (Shortest Job First)",
        optionC: "c. Priority Scheduling",
        optionD: "d. Multilevel Queue Scheduling",
        questKey: "a. FCFS (First-Come, First-Served)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quizId: quizId_3.id,
        question:
          "Algoritma penjadwalan yang memberikan prioritas lebih tinggi kepada tugas dengan waktu pengerjaan terpendek disebut...",
        optionA: "a. FCFS (First-Come, First-Served)",
        optionB: "b. SJF (Shortest Job First)",
        optionC: "c. Priority Scheduling",
        optionD: "d. Multilevel Queue Scheduling",
        questKey: "b. SJF (Shortest Job First)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("quiz_questions", null, {});
  },
};
