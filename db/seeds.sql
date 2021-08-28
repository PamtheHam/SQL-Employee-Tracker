INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000.00, 1),
       ("Lead Engineer", 150000.00, 2),
       ("Software Engineer", 120000.00, 2),
       ("Account Manager", 160000.00, 3),
       ("Accountant", 125000.00, 3),
       ("Legal Team Lead", 250000.00, 4),
       ("Lawyer", 190000.00, 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
       ("Mike", "Chan", 1),
       ("Ashley", "Rodriguez", 2),
       ("Kevin", "Tupik", 3),
       ("Kunal", "Singh", 4),
       ("Malia", "Brown", 5),
       ("Sarah", "Lourd", 6),
       ("Tom", "Allen", 7);