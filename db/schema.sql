-- first source db/schema.sql
-- second source db/seeds.sql
-- creates database, tables, then inserts from seeds.sql

DROP TABLE IF EXISTS office;
CREATE DATABASE office;
USE office;

-- must be created first 
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(30) NOT NULL,
)

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary decimal(10,2) NOT NULL,
    department_id INTEGER NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE SET NULL
)

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE SET NULL
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES (manager _id) REFERENCES manager (id) ON DELETE SET NULL
)