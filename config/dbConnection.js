const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password : '',
    port: 3306,
    database: 'blog',
});


module.exports = connection;