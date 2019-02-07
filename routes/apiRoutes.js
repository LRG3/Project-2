var path = require("path");
var express = require("express")
var app = express()


module.exports = function(app) {

app.post("/redirected/newUser", function (req, res) {
    console.log(req.body)
    // save user to database

    res.end();
  })
}

