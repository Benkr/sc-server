const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/slugcloud', { logging: false });

(async () => {
  try {
    await db.sync();
    console.log('DB Synced');
  } catch (err) {
    console.log(err);
  }
})();

module.exports = db;
