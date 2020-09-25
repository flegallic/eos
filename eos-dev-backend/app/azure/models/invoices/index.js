const dbConfig = require("../../../db/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.azure.DB, dbConfig.azure.USER, dbConfig.azure.PASSWORD, {
  host: dbConfig.azure.HOST,
  dialect: dbConfig.azure.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.azure.pool.max,
    min: dbConfig.azure.pool.min,
    acquire: dbConfig.azure.pool.acquire,
    idle: dbConfig.azure.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.invoices = require("./db.model.js")(sequelize, Sequelize);
module.exports = db;