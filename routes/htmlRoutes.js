var axios = require("axios")
var db = require("../models")
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index")
  })

  app.get("/login", function (req, res) {
    var scopes = "user-read-private user-read-email playlist-read-private"
    var redirectUrl = "https://aqueous-everglades-38664.herokuapp.com/callback"
    var clientId = "873845158fb34ac39c8fedba710f1354"

    res.redirect("https://accounts.spotify.com/authorize" +
      "?response_type=code" + "&client_id=" +
      clientId + (scopes ? "&scopes=" + encodeURIComponent(scopes) : "") +
      "&redirect_uri=" + encodeURIComponent(redirectUrl))

  })

var username = ""
  app.get("/callback", function (req, res) {
    var redirectUrl = "https://aqueous-everglades-38664.herokuapp.com/callback"

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
      // console.log(response)

      axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + response.data.access_token
        }
      }).then(function (response) {
        username = response.data.display_name
        return username
      }).then(function(userName) {
        var thisData = {
          grant_type: "refresh_token",
          refresh_token: response.data.refresh_token,
          redirect_uri: redirectUrl
        }
  
        var newData = Object.keys(thisData).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(thisData[key])
        }).join('&')
  
        axios.request({
          url: "https://accounts.spotify.com/api/token",
          data: newData,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            "Authorization": "Basic " + Buffer.from("873845158fb34ac39c8fedba710f1354:d0d6e4bcd8014736b1de3b4d1cc2d35b").toString("base64")
          },
          method: "post"
        }).then(function(response) {
          axios.get("https://api.spotify.com/v1/me/playlists", {
            headers: {
              Authorization: "Bearer " + response.data.access_token
            }
          })
          .then(function(response) {
            
            var playlist = response.data.items
            console.log(playlist)
            res.render("login", {username, playlist})
          }).catch(function(error) {
            console.log(error)
          })
        })
      })







  
    })
  })
}


