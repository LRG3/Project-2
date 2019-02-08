module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    spotifyId: DataTypes.STRING,
    playlists: DataTypes.JSON
  });
  return User
}
