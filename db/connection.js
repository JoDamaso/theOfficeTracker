// conncetion to my sql

const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection(
    {
    host: 'localhost',
    // YOur MySQL username,
    user: 'root',
    // Your MySQL password,
    password: 'Mustang2015!', // change all this with .env 
    database: 'election'
    },
    console.log('Connected to the Office Tracker database.')
);


connection.connect();
connection.query = util.promisify(connection.query)
module.exports = connection;