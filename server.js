const express = require('express');
const mysql = require("mysql2");
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enables CORS for cross-origin requests
app.use(express.json()); // Parses JSON requests for POST, PUT, DELETE, etc.

// MySQL Connection Configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // Replace with your actual password
  database: 'aml',      // Replace with your actual database name
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
  } else {
    console.log('Connected to MySQL database!');
  }
});

// Base route to test server connection
app.get("/", (req, res) => {
    res.send("Connection Established");
});

// Add a route to fetch all records from a table (Example: users table)
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users"; // Adjust table name as needed
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err.message);
      res.status(500).send("Error fetching data.");
    } else {
      res.json(results); // Respond with fetched data in JSON format
    }
  });
});

// Add a route to insert a new record into a table
app.post("/users", (req, res) => {
  const { name, email } = req.body; // Destructure input from the request body
  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error("Error inserting user:", err.message);
      res.status(500).send("Error inserting data.");
    } else {
      res.json({ id: result.insertId, name, email }); // Respond with inserted data
    }
  });
});

// Add a route to update a record in a table
app.put("/users/:id", (req, res) => {
  const { id } = req.params; // Get the ID from the route parameter
  const { name, email } = req.body; // Get updated data from the request body
  const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  db.query(sql, [name, email, id], (err, result) => {
    if (err) {
      console.error("Error updating user:", err.message);
      res.status(500).send("Error updating data.");
    } else {
      res.send("User updated successfully.");
    }
  });
});

// Add a route to delete a record from a table
app.delete("/users/:id", (req, res) => {
  const { id } = req.params; // Get the ID from the route parameter
  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting user:", err.message);
      res.status(500).send("Error deleting data.");
    } else {
      res.send("User deleted successfully.");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
