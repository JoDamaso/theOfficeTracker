const mysql = require('mysql');
const util = require('util');

// require('dotenv').config();

// Connect to database
const connection = mysql.createConnection(
    {
    host: process.env.DB_HOST,
    // YOur MySQL username,
    user: process.env.DB_USER,
    // Your MySQL password,
    password: process.env.DB_PASS, 
    database: 'Office Database' 
    },
    console.log('Connected to the Office Tracker database.')
);

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;