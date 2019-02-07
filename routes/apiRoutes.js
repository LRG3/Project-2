var path = require("path");
var express = require("express")
var app = express()
var User = require("../models/user")


module.exports = function(app) {

app.post("/newUser", function (req, res) {
    console.log(req.body)
    User.create({
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
    }).then(function(results) {
      res.end();
    })



  })
}

