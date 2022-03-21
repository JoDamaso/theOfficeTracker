const data = require('./connection.js');

// functions that will fire from user input, inside the functions are MySQL commands to pull from our database
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

class Database {
    constructor(data) {
        this.data = data;
    };

    // TABLE department
    viewDepartment() {
        return this.data.query('SELECT * FROM department');
    }
    // TABLE role
    viewRoles() {
        return this.data.query('SELECT * FROM role');
    }
    // TABLE employee
    viewEmployees() {
        return this.data.query('SELECT * FROM employee');
    }

    // adding input into the TABLES
    // param will be inserted where '?' is
    addDepartment(department) {
        return this.data.query('INSERT INTO department SET ?', department);
    }
    
    addRole(role) {
        return this.data.query('INSERT INTO role SET ?', role);
    }

    addEmployee(employee) {
        return this.data.query('INSERT INTO employee SET ?', employee);
    }

    // deleting from tables 
    removeDepartment(department) {
        return this.data.query('DELETE FROM department WHERE ?', department);
    }

    removeRole(role) {
        return this.data.query('DELETE FROM role WHERE ?', role);
    }

    removeEmployee(employee) {
        return this.data.query('DELETE FROM employee WHERE ?', employee);
    }

    //need to update employee role
    updateRole() {
        return this.data.query()
    }
};

module.exports = Database(data);