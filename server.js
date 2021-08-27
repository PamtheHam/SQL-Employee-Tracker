const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'PuppyLion1!',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the employeeTracker_db database.`)
);

// 
app.get('/api/', (req, res) => {
  console.log('api/');
  
db.query('SELECT * FROM ', function (err, results) {
})
});


// Query database
db.query('SELECT * FROM ', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// const viewSomething = () => {

//     let  = inquirer.prompt();

//       switch () {
//         case 'Manager':

//         break;
  
//         case 'Engineer':

//         break;
  
//         case 'Intern':

//         break;
  
//         default: "";
//       }
//     catch (error) {
//       console.log(error);
//     }
//   };
  