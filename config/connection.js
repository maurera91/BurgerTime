var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Gobucks!1",
    database: "burgers_db"
});

connection.connect((err)=>{
    if (err) throw err;
    console.log("connected at id: " + connection.threadId);
})

module.exports = connection;