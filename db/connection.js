// connection to my sql
const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const connection = mysql.createConnection(
    {
    host: process.env.DB_HOST,
    // YOur MySQL username,
    user: process.env.DB_USER,
    // Your MySQL password,
    password: process.env.DB_PASS, // change all this with .env 
    database: 'election' // change this 
    },
    console.log('Connected to the Office Tracker database.')
);


connection.connect();
connection.query = util.promisify(connection.query);
module.exports = connection;