var path = require("path");
var express = require("express")
var app = express()
var User = require("../models/user")


module.exports = function(app) {

app.post("/redirected/newUser", function (req, res) {
    console.log(req.body)
    User.create({
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      spotifyId: req.body.spotifyId
    }).then(function(results) {
      res.end();
    })



  })
}

