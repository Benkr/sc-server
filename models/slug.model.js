const { DataTypes } = require('sequelize');
const db = require('.');

const Slug = db.define('Slug', {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Slug;
