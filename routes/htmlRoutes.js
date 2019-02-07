var axios = require("axios")
var orm = require("../models/index")

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index")
  })

  app.get("/login", function (req, res) {
    var scopes = "user-read-private user-read-email playlist-read-private"
    var redirectUrl = "http://localhost:8083/callback"
    var clientId = "873845158fb34ac39c8fedba710f1354"

    res.redirect("https://accounts.spotify.com/authorize" +
      "?response_type=code" + "&client_id=" +
      clientId + (scopes ? "&scopes=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" + encodeURIComponent(redirectUrl))

  })


  app.get("/callback", function (req, res) {
    var redirectUrl = "http://localhost:8083/callback"
    console.log(Buffer.from("873845158fb34ac39c8fedba710f1354:d0d6e4bcd8014736b1de3b4d1cc2d35b").toString("base64"))

    var requestData = {
      grant_type: "authorization_code",
      code: req.query.code,
      redirect_uri: redirectUrl
    }

    var paramData = Object.keys(requestData).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(requestData[key])
    }).join('&')

    axios.request({
      url: "https://accounts.spotify.com/api/token",
      data: paramData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        "Authorization": "Basic " + Buffer.from("873845158fb34ac39c8fedba710f1354:d0d6e4bcd8014736b1de3b4d1cc2d35b").toString("base64")
      },
      method: "post"
    }).then(function (response) {
      axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + response.data.access_token
        }
      }).then(function (response) {
        console.log(response)
        var userName = response.data.display_name
        res.redirect("/redirected")
      })
    })

  })


  app.get("/redirected", function(req, res) {
    res.render("login")
  })

}


