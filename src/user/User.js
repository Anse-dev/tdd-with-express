const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/config");

class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;
