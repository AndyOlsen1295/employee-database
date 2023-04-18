-- View all departments
SELECT id AS 'Department ID', name AS 'Department Name' FROM departments;

-- View all roles
SELECT r.id AS 'Role ID', r.title AS 'Job Title', d.name AS 'Department Name', r.salary AS 'Salary'
FROM roles AS r
JOIN departments AS d ON r.department_id = d.id;

-- View all employees
SELECT e.id AS 'Employee ID', e.first_name AS 'First Name', e.last_name AS 'Last Name', 
  r.title AS 'Job Title', d.name AS 'Department', r.salary AS 'Salary', 
  CONCAT(m.first_name, ' ', m.last_name) AS 'Manager'
FROM employees AS e
JOIN roles AS r ON e.role_id = r.id
JOIN departments AS d ON r.department_id = d.id
LEFT JOIN employees AS m ON e.manager_id = m.id;

-- Add a department
INSERT INTO departments (name) VALUES ('Marketing');

-- Add a role
INSERT INTO roles (title, salary, department_id)
VALUES ('Marketing Coordinator', 45000, 4);

-- Add an employee
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Emily', 'Smith', 7, 2);

-- Update an employee's role
UPDATE employees
SET role_id = 8
WHERE id = 3;
