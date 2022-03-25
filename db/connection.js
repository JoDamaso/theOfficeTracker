const mysql = require('mysql2');
const util = require('util');
require('dotenv').config();

// Connect to database
const connection = mysql.createConnection(
    {
    host: process.env.DB_HOST,
    // YOur MySQL username,
    user: process.env.DB_USER,
    // Your MySQL password,
    password: process.env.DB_PASS,
    database: 'office'
    },
    console.log('Connected to the Office Tracker database.')
);

connection.connect(err => {
    if (err) {
        console.log(err);
    }
});

connection.query = util.promisify(connection.query);

module.exports = connection;