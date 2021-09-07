
// Import and require npm packages
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');
const util = require('util');
const connection = require('./db/connection');

const dbQuery = util.promisify(db.query);

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
        addADepartment();
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
  

// const viewDepartments = () => {
// // show all departments

// dbQuery('SELECT * FROM departments')
// .then(results => {
//   console.table(results)
// }).catch(err => {
//   console.log(err)
// })

// viewSomething();
// }

// const viewRoles = () => {
//     // show all roles
//   dbQuery('SELECT * FROM roles')
//     .then(results => {
//       console.table(results)
//     }).catch(err => {
//       console.log(err)
//     })
//   viewSomething();
// }




// const viewEmployees = () => {
//     // show all employees
//     db.query('SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.name AS department CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employees INNER JOIN roles on roles.id = employees.role_id INNER JOIN departments on departments.id', (err, results) => {
 
  // .then(results => {
  //   console.table(results)
  // }).catch(err => {
  //   console.log(err)
  // })
//   viewSomething();

// }})
//   });
//   };



// const addADepartment = async () => {



//   const addDepartment = await inquirer.prompt([
//       {
//         type: 'input',
//         name: 'department',
//         message: 'What is the name of the new department?',
//       },
//   ]);

//   const [departmentName] = await connection.execute('INSERT INTO departments (name) VALUES ("${addDepartment.department}")');
//   console.log('Added new department')

//         viewSomething();
//   };

const addARole = () => {
    // create questions and an inquirer prompt for role input

  const departmentsArr = [];

  const addRole =  await inquirer.prompt([
      {
        type: 'input',
        name: 'roleName',
        message: 'What is the new role name?',
      },
      {
        type: 'input',
        name: 'roleSalary',
        message: 'What is the new role salary?',
      },
      {
        type: 'input',
        name: 'roleDepartment',
        message: 'In which department does this new role belong?',
        choices: departmentsArr,
      },
  ])

  .then(results => {
    console.table(results)
  }).catch(err => {
    console.log(err)
  });

const addAnEmployee = () => {
   // create questions and an inquirer prompt for employee input
   const managerArr = [];
   const rolesArr = [];

  const addEmployee = await inquirer.prompt([
     {
       type: 'input',
       name: 'firstName',
       message: 'What is the new employee\'s first name?',
     },
     {
       type: 'input',
       name: 'lastName',
       message: 'What is the new employee\'s last name?',
     },
     {
       type: 'input',
       name: 'roleName',
       message: 'Which role does this employee occupy?',
       choices: rolesArr,
     },
     {
      type: 'input',
      name: 'managerName',
      message: 'Who will be this employee\'s manager?',
      choices: managerArr,
    },
 ])

// .then(results => {
//   console.table(results)
// }).catch(err => {
//   console.log(err)
// })
//   viewSomething();
//  }
//   });

const updateEmployeeRole = () => {
    // create questions and an inquirer prompt to change selected data


    const employeesArr = [];
    const rolesArr = [];

    const employeeUpdate = await inquirer.prompt([

      {
        type: 'list',
        name: 'choices',
        message: 'Which employee would you like to update?',
        choices: employeesArr,
      },
      {
        type: 'list',
        name: 'choices',
        message: 'Which role would you like to assign to this employee?',
        choices: rolesArr,
      },

    ]);

    .then(results => {
      console.log(results)
    }).catch(err => {
      console.log(err)
    })
  viewSomething();
  };