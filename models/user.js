module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      userName: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      spotifyId: DataTypes.STRING
    });
  
    // User.associate = function(models) {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   User.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return User;
  };
  
