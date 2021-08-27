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
    database: 'movie_db'
  },
  console.log(`Connected to the movie_db database.`)
);

// route to notes.html
app.get('/api/movies', (req, res) => {
  console.log('api/movies');
  
db.query('SELECT * FROM movies', function (err, results) {
})
});


// Query database
db.query('SELECT * FROM movies', function (err, results) {
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
  