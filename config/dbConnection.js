const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.HOSTNAME,
    user: process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB,
});


module.exports = connection;