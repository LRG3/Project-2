var connection = require("../config/connection")

var orm = {
    selectAll: function(tableName) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [tableName], function(error, result) {
            console.log(result)
        })
    },
    createId: function(username, password, email) {
        var queryString = "INSERT INTO user (userName, password, email) VALUES (?, ?, ?)"
        connection.query(queryString, [username, password, email], function(error, result) {
            if(error) {
                throw error
            }
        })
    },
    updateOne: function(spotifyId, email) {
        var queryString = "UPDATE spotifyId SET ?? WHERE email = ?"
        connection.query(queryString, [spotifyId, email], {
            if(error) {
                throw error
            }
        })
    }
}

module.exports = orm

