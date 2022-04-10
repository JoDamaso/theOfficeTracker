// root index 
const db = require('./db/index');
const { prompt } = require('inquirer');
const logo = require('asciiart-logo');
const gradient = require('gradient-string');

async function init() {
    const text = logo({ name: "Office Database" }).render();
    console.log(text);
    return employeeQuestions();
};

init().then(console.log).catch(console.error);

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
                // {
                //     type: 'input',
                //     name: 'View all Managers',
                //     value: 'View Managers'
                // },
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
                // {
                //     type: 'input',
                //     name: 'Update Employee Role',
                //     value: 'Update Employee Role'
                // },
                // {
                //     type: 'input',
                //     name: 'Remove a Department',
                //     value: 'Remove a Department'
                // },
                // {
                //     type: 'input',
                //     name: 'Remove a Role',
                //     value: 'Remove a Role'
                // },
                // {
                //     type: 'input',
                //     name: 'Remove a Employee',
                //     value: 'Remove a Employee'
                // },
                {
                    name: "Exit OfficeTracker Database?",
                    value: 'exit'
                },
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
        // case 'View Managers':
        //     return viewManagers();
        case 'Add Department':
            return inputDepartment();
        case 'Add Role':
            return inputRole();
        case 'Add Employee':  
            return inputEmployee();
        // case 'Update Employee Role':
        //     return updateEmployeeRole();
        // case 'Remove a Department':
        //     return deleteDepartment();
        // case 'Remove a Role':
        //     return deleteRole();
        // case 'Remove a Employee':
        //     return deleteEmployee();
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

// async function viewManagers() {

// };

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
    const currentDepartments = await db.getDepartment();
    
    // map to get a list of all updated roles if any was inputted
    const departmentList = currentDepartments.map(({ id, name }) => ({
        name: name, 
        value: id
    }));

    const role = await prompt([
        {
            name: "title",
            message: "What's the role you'd like to add?"
        },
        {
            name: "salary",
            message: "What's the salary of this role?"
        },
        {
            type: 'list',
            name: "department_id",
            message: 'Which department are they in?',
            choices: departmentList
        }  
    ]);
    await db.addRole(role)
    employeeQuestions();
};

async function inputEmployee() {
    const employee = await prompt([
        {
            name: "first_name",
            message: "What is the first name of the employee you'd like to add?"
        },
        {
            name: "last_name",
            message: "What is the last name of the employee you'd like to add?"
        }, 
    ]);
    await db.addEmployee(employee)
    employeeQuestions();
};

// async function updateEmployeeRole() {
//     await db.newEmployeeRole()
// }

function quit() {
    console.log(gradient('cyan', 'pink')('Goodbye!'));
    process.exit();
};
