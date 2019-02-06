var path = require("path");
var express = require("express")
var app = express()

module.exports = function(app) {
	app.get("/", function(req, res) {
    res.render("index")
  });
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(raven_db) {
  //     res.json(dbExamples);
  //   });
  };
  

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(raven_db) {
      res.json(raven_db);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(raven_db) {
      res.json(raven_db);
    });
  });

  
