var db = require("../models")


module.exports = function(app) {

app.post("/newUser", function (req, res) {
    console.log(req.body)
    db.User.create({
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
    }).then(function(results) {
      res.end();
    })



  })
}

