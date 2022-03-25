USE office;

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

INSERT INTO department (name)
VALUES
('Sales'),
('Human Resources'),
('Accounting'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Associate', 30000, 1),
('ASM', 50000, 1),
('Hiring Manager', 70000, 2),
('HR Representative', 65000, 2),
('Jr. Accountant', 63000, 3),
('Sr. Accountant', 90000, 3),
('Lawyer', 150000, 4),
("Lawyer's Assistant", 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Damaso', 1, 1)