
// Import and require npm packages
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table')

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'PuppyLion1!',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the employeeTracker_db database.`)
);

db.connect(function (err) {
  if (err) throw err;
  viewSomething();
})

const viewSomething = () => {

      inquirer.prompt([

      {
        type: 'list',
        name: 'choices',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
        ],
      },
    ])

      .then(function (value) {

      switch (value.choices) {

        case 'View all departments':
        viewDepartments();
        break;
  
        case 'View all roles':
        viewRoles();
        break;
  
        case 'View all employees':
        viewEmployees();
        break;

        case 'Add a department':
        addDepartment();
        break;

        case 'Add a role':
        addARole();
        break;

        case 'Add an employee':
        addAnEmployee();
        break;

        case 'Update an employee role':
        updateEmployeeRole();
        break;
      }
    })
  };
  

const viewDepartments = () => {
// show all departments
  viewSomething();
  } ;

const viewRoles = () => {
    // show all roles
  viewSomething();
  } ;

const viewEmployees = () => {
    // show all employees
  viewSomething();
  } ;

const addDepartment = () => {
    // create questions and an inquirer prompt for department input
  viewSomething();
  } ;

const addARole = () => {
    // create questions and an inquirer prompt for role input
  viewSomething();
  } ;

const addAnEmployee = () => {
   // create questions and an inquirer prompt for employee input
  viewSomething();
  } ;

const updateEmployeeRole = () => {
    // create questions and an inquirer prompt to change selected data
  viewSomething();
  } ;