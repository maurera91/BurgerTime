var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Gobucks!1",
    database: "burgers"
});

connection.connect((err)=>{
    if (err) throw err;
    console.log("connected at id: " + connection.threadId);
})

module.exports = connection;