// root index 
const { prompt } = require('inquirer');
const db = require('./db');
const logo = require('asciiart-logo');

// const gradient = require('gradient-string');


function init() {
    const text = logo({name: "Office Database"}).render();
    console.log(text);
    employeeQuestions();
    // console.log(gradient('cyan', 'pink')('Hello world!'));
};

init();

// WHEN I choose to view all departments
// WHEN I choose to view all roles
// WHEN I choose to view all employees
// WHEN I choose to add a department
// WHEN I choose to add a role
// WHEN I choose to add an employee
// WHEN I choose to update an employee role

async function employeeQuestions() {
    const { choice } = await prompt([
        {
            type: 'list',
            message: "What would you like to do first?",
            name: 'choice',
            choices: [
                {
                    type: 'input',
                    name: 'View all Departments',
                    value: 'View Departments'
                },
                {
                    type: 'input',
                    name: 'View all Roles',
                    value: 'View Roles'
                },
                {
                    type: 'input',
                    name: 'View all Employees',
                    value: 'View Employees'
                },
                {
                    type: 'input',
                    name: 'Add a Department',
                    value: 'Add Department'
                },
                {
                    type: 'input',
                    name: 'Add a Role',
                    value: 'Add Role'
                },
                {
                    type: 'input',
                    name: 'Add a Employee',
                    value: 'Add Employee'
                },
                {
                    type: 'input',
                    name: 'Update Employee Role',
                    value: 'Update Employee Role'
                },
                {
                    type: 'input',
                    name: 'Remove a Department',
                    value: 'Remove a Department'
                },
                {
                    type: 'input',
                    name: 'Remove a Role',
                    value: 'Remove a Role'
                },
                {
                    type: 'input',
                    name: 'Remove a Employee',
                    value: 'Remove a Employee'
                },
                {
                    name: "Exit OfficeTracker Database?",
                    value: 'exit'
                }
            ]
        }
    ]);

    switch (choice) {
        case 'View Departments':
            return viewDepartments();
        case 'View Roles':
            return viewRoles();
        case 'View Employees':
            return viewEmployees();
        case 'Add Department':
            return inputDepartment();
        case 'Add Role':
            return inputRole();
        case 'Add Employee':  
            return inputEmployee();
        case 'Update Employee Role':
            return updateEmployeeRole();
        default:
            return quit();
    };
};


async function viewDepartments() {
    const departments = await db.getDepartment();

    console.log("\n");
    console.table(departments);
    employeeQuestions();
};

async function viewRoles() {
    const roles = await db.getRoles();

    console.log("\n");
    console.table(roles);
    employeeQuestions();
};

async function viewEmployees() {
    const employees = await db.getEmployees();

    console.log("\n");
    console.table(employees);
    employeeQuestions();
};

async function inputDepartment() {
    const department = await prompt([
        {
            name: "name",
            message: "What's the name of the department you'd like to add?"
        }
    ]);
    await db.addDepartment(department)
    employeeQuestions();
};

async function inputRole() {

};

async function inputEmployee() {
    const employee = await prompt([
        {
            name: "first_name",
            mes
        }
    ])
};

async function updateEmployeeRole() {
    await db.newEmployeeRole()
}

function quit(){
    console.log("Goodbye!");
    process.exit();
}

// employeeQuestions();