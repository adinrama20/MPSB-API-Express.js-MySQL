module.exports = (sequelize, DataTypes) => {
  const Practice = sequelize.define(
    "Practice",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      case_study: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      type: {
        type: DataTypes.BOOLEAN,
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
      tableName: "practices",
    }
  );

  return Practice;
};
