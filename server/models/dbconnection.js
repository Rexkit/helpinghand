const mysql = require("mysql");

//Create connection to remote DB
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    port: "",
    database: "test_schema",
});

// Connect DB
connection.connect((err) => {
    if (!err) console.log("SQL Database Connected...");
    else
        console.log(
            "SQL Database NOT connected... " + JSON.stringify(err, undefined, 2)
        );
});

module.exports = connection;