import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://qqmqwzid:EKsa0cSKGLiPf5BPqpDmReb8yU73faL_@babar.db.elephantsql.com/qqmqwzid",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
