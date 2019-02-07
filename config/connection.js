var mysql = require("mysql")
var connection

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Chloe",
        database: "raven_db"
    })
}



connection.connect(function(error) {
    if (error) throw (error)
    console.log("Using localhost as " + connection.threadId)
})

module.exports = connection
