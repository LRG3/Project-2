var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
			dbExample
		) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/login", function(req, res) {
    var scopes = "user-read-private user-read-email"
    var redirectUrl = "http://localhost:8083/callback"
    var clientId = "873845158fb34ac39c8fedba710f1354"
  
    res.redirect("https://accounts.spotify.com/authorize" + 
    "?response_type=code" + "&client_id=" + 
    clientId + (scopes ? "&scopes=" + encodeURIComponent(scopes) : "") + 
    "&redirect_uri=" + encodeURIComponent(redirectUrl))
  });

  app.get("/callback", function(req, res) {
    res.render("login")
  });



  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
