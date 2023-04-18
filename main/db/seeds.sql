INSERT INTO departments (name)
VALUES ('Sales'), ('Marketing'), ('Engineering'), ('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Manager', 100000, 1), ('Salesperson', 50000, 1),
       ('Marketing Manager', 90000, 2), ('Marketing Coordinator', 45000, 2),
       ('Lead Engineer', 120000, 3), ('Software Engineer', 80000, 3),
       ('HR Manager', 110000, 4), ('HR Coordinator', 50000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL), ('Jane', 'Smith', 2, 1),
       ('Bob', 'Johnson', 3, NULL), ('Mary', 'Lee', 4, 3),
       ('Sarah', 'Williams', 5, NULL), ('Tom', 'Brown', 6, 5),
       ('Alice', 'Davis', 7, NULL), ('Mike', 'Wilson', 8, 7);
