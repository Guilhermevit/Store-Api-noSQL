import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "Adicionar seu banco de dados",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
