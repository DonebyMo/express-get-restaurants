const Sequelize = require("sequelize");
const { sequelize } = require("../db");
const express = require("express");

const Restaurant = sequelize.define("restaurants", {
  name: Sequelize.STRING,
  location: Sequelize.STRING,
  cuisine: Sequelize.STRING,
});

module.exports = Restaurant;
