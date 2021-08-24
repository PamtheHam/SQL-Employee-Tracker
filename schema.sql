DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  salary INT NOT NULL,
  PRIMARY KEY,
)

DROP TABLE IF EXISTS employees;
CREATE TABLE employees (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  FOREIGN KEY (movie_id),
  REFERENCES movies(id),
  ON DELETE SET NULL

)
