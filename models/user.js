var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var User = sequelize.define("users", {
  userName: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  spotifyId: Sequelize.STRING
});

User.sync();

module.exports = User;

