DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
)

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY,
)

DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (movie_id),
  REFERENCES movies(id),
  ON DELETE SET NULL
)
