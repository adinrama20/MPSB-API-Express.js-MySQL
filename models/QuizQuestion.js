module.exports = (sequelize, DataTypes) => {
  const QuizQuestion = sequelize.define(
    "QuizQuestion",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      optionA: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      optionB: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      optionC: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      optionD: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      questKey: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "quiz_questions",
    }
  );

  return QuizQuestion;
};
