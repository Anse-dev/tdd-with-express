const Sequelize = require("sequelize");
const config = require("config");
const dbConfig = config.get("database");
const sequelize = new Sequelize("", "", "", {
  dialect: dbConfig.dialect,
  storage: dbConfig.storage,
  logging: false,
});
module.exports = sequelize;
