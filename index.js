const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()

// Set up middleware for parsing JSON and URL encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Import the db object from connection.js
const db = require('./connection');

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

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
                                                              