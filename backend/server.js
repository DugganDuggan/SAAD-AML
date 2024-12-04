const express = require('express');
const mysql = require('mysql2'); // Use mysql2 instead of mysql
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', // Add your password here
    database: 'aml',
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

// API endpoint to fetch filtered data
app.get('/api/browseMedia', (req, res) => {
    const { genres, types, page = 1, pageSize = 20 } = req.query;

    // Parse genres and types from JSON strings
    const genreArray = genres ? JSON.parse(genres) : [];
    const typeArray = types ? JSON.parse(types) : [];


    // Start building the SQL query
    let query = 'SELECT * FROM Media WHERE 1=1';
    const queryParams = [];

    // Add genres filter if provided
    if (genreArray.length > 0) {
        const likeClauses = genreArray.map(() => 'genre LIKE ?').join(' OR ');
        query += ` AND (${likeClauses})`;
        genreArray.forEach((genre) => queryParams.push(`%${genre}%`));
    }
    
    // Add types filter if provided
    if (typeArray.length > 0) {
        query += ` AND type IN (${typeArray.map(() => '?').join(',')})`;
        queryParams.push(...typeArray);
    }

    // Add pagination
    const offset = (parseInt(page, 10) - 1) * parseInt(pageSize, 10);
    query += ' LIMIT ? OFFSET ?';
    queryParams.push(parseInt(pageSize, 10), offset);

    // Execute the query using mysql2
    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Query execution error:', err);
            res.status(500).send(err);
        } else {
            console.log('Query Results:', results);
            res.json(results);
        }
    });
});

app.get('/api/specificMedia', (req, res) => {
    const { mediaID } = req.query;

    let query = 'SELECT * FROM Media WHERE media_ID = ?';
    const queryParams = [];

    queryParams.push(mediaID)
    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Query execution error:', err);
            res.status(500).send(err);
        } else {
            console.log('Query Results:', results);
            res.json(results);
        }
    });

});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
