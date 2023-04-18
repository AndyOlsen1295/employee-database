const express = require('express');
const mysql = require('mysql2');
require('dotenv').config()
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection (
  {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PW,
    database: 'employees_db',
  }
);

// Load the schema and seed data into the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');

  const schemaPath = path.join(__dirname, 'db', 'schema.sql');
  const seedsPath = path.join(__dirname, 'db', 'seeds.sql');

  const schema = fs.readFileSync(schemaPath, 'utf8');
  const seeds = fs.readFileSync(seedsPath, 'utf8');

  db.query(schema, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Schema loaded into MySQL database');
  });

  db.query(seeds, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Seed data loaded into MySQL database');
  });
});


// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the employees_db database.');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/employees', (req, res) => {
  const sql = 'SELECT * FROM employees';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
