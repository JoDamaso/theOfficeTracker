const data = require('./connection.js');

// functions that will fire from user input, inside the functions are MySQL commands to pull from our database
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

class Database {
    constructor(data) {
        this.data = data;
    };

    // TABLE department
    getDepartment() {
        return this.data.query('SELECT * FROM department');
    }
    // TABLE role
    getRoles() {
        return this.data.query('SELECT * FROM role');
    }
    // TABLE employee
    getEmployees() {
        return this.data.query('SELECT * FROM employee');
    }

    getManagers(manager) {
        return this.data.query("SELECT id, first_name, last_name FROM employee WHERE id = ?", manager);
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
        return this.data.query('DELETE FROM role WHERE id = ?', role);
    }

    removeEmployee(employee) {
        return this.data.query('DELETE FROM employee WHERE id = ?', employee);
    }

    //need to update employee role
    newEmployeeRole(emId, roleId) {
        return this.data.query('UPDATE employee SET role_id = ? WHERE id = ?', [emId, roleId])
    }
};

module.exports = new Database(data);