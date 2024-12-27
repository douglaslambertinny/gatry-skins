const { Sequelize } = require("sequelize");
const data = require("./data/skins.json");
const db = new Sequelize(
  "postgres://gatry:gatry@localhost:5432/gatryskins"
);
const SkinModel = require("./models/skin.model");

// Database connection
async function run() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Import all models and create tables
const models = [
  require("./models/skin.model"),
  require("./models/user.model")
].map(model=>model(db));

// insert data fake in the skin model for test 
async function insertFakeData() {
  try {
    skins = data['data'];
    await db.models.skin.bulkCreate(skins);
  } catch (error) {
    console.error("Unable to insert fake data:", error);
  }
}

// Recreate database
async function recreate() {
  try {
    await db.drop();
    await db.sync();
    await insertFakeData();
  } catch (error) {
    console.error("Unable to recreate the database:", error);
  }
}

// Sync database with models
// db.sync().then(console.log("DB is synced"));
recreate();
module.exports = { run, db };
