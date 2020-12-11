const mysql = require("mysql");
require("dotenv/config");

var mysqlConnection = mysql.createConnection({
    host: process.env.Host,
    user: process.env.User,
    password: process.env.Password,
    database: process.env.Database,
  });
  
mysqlConnection.connect((err) => {
    !err ? console.log("Conexión exitosa!") : console.log("Falló la conexión a la BD " + JSON.stringify(err));
});

module.exports = mysqlConnection;