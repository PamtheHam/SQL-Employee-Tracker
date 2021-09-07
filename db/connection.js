const connect = require('http2');
const mysql = require('mysql2');
require('dotenv').config();


// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },

  console.log(`Connected to the employeeTracker_db database.`)
);

connection.connect(function (err){
    if (err) throw err;
})

module.exports = connection;
