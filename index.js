// root index 
const { prompt } = require('inquirer');
// const mysql = require('mysql2');
const db = require('./db');

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
    };
};



async function viewDepartments() {
    const department = await db.getDepartment();

    console.log("\n");
    console.table(department);
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

employeeQuestions();