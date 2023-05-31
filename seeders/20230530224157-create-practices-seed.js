"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("practices", [
      {
        name: "Praktik Materi 1",
        case_study:
          "Lakukan percobaan membuat sebuah direktori bernama `utils`. Kemudian masuk ke dalam direktori tersebut dan buatlah file dengan nama `main.c`. Isikan file yang telah dibuat dengan kode program yang terdapat pada link google drive berikut ini: https://drive.google.com/file/d/1oPDdWRrEzvWUNob-cBgKvwFmCqdt_IIE/view?usp=sharing . Setelah melakukan compile dengan gcc jalankan program tersebut sebanyak 10 kali, kemudian catat hasil yang ditampilkan. Hapus kode program pada baris 10, 17, 22, dan 29 yang berisi perintah pthread_mutex_lock dan pthread_mutex_unlock. Kemudian jalankan program tersebut sebanyak 10 kali. Catat hasil outputnya.",
        type: true,
        createdat: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktik Materi 2",
        case_study:
          "Lakukan percobaan membuat sebuah direktori bernama `utils`. Kemudian masuk ke dalam direktori tersebut dan buatlah file dengan nama `main.c`. Isikan file yang telah dibuat dengan kode program yang terdapat pada link google drive berikut ini: https://drive.google.com/file/d/1oPDdWRrEzvWUNob-cBgKvwFmCqdt_IIE/view?usp=sharing . Setelah melakukan compile dengan gcc jalankan program tersebut sebanyak 10 kali, kemudian catat hasil yang ditampilkan. Hapus kode program pada baris 10, 17, 22, dan 29 yang berisi perintah pthread_mutex_lock dan pthread_mutex_unlock. Kemudian jalankan program tersebut sebanyak 10 kali. Catat hasil outputnya.",
        type: true,
        createdat: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Praktik Materi 3",
        case_study:
          "Lakukan percobaan membuat sebuah direktori bernama `utils`. Kemudian masuk ke dalam direktori tersebut dan buatlah file dengan nama `main.c`. Isikan file yang telah dibuat dengan kode program yang terdapat pada link google drive berikut ini: https://drive.google.com/file/d/1oPDdWRrEzvWUNob-cBgKvwFmCqdt_IIE/view?usp=sharing . Setelah melakukan compile dengan gcc jalankan program tersebut sebanyak 10 kali, kemudian catat hasil yang ditampilkan. Hapus kode program pada baris 10, 17, 22, dan 29 yang berisi perintah pthread_mutex_lock dan pthread_mutex_unlock. Kemudian jalankan program tersebut sebanyak 10 kali. Catat hasil outputnya.",
        type: true,
        createdat: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("practices", null, {});
  },
};
