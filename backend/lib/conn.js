const mysql = require("mysql2");

// hade vi jobbat mot en server, hade det varit ett IP-nummer.  i ett "skarpt" projekt hade man lag till env-filer här som man hämtat lösenord ifrån.

const connection = mysql.createConnection({
    host:"localhost",       
    port: "3306",
    user: "notes",
    password: "notes",
    database: "notes"
});

module.exports = connection;

