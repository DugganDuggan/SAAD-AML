import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
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
    const { genres, types, sort } = req.query;

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

    // Add year filter if provided
    // if (startYear && endYear) {
    //     query += ` AND publication_year BETWEEN ? AND ?`;
    //     queryParams.push(parseInt(startYear, 10), parseInt(endYear, 10));
    // } else if (startYear) {
    //     query += ` AND publication_year >= ?`;
    //     queryParams.push(parseInt(startYear, 10));
    // } else if (endYear) {
    //     query += ` AND publication_year <= ?`;
    //     queryParams.push(parseInt(endYear, 10));
    // }

    const allowedSortColumns = ['title', 'author', 'genre']; // Define valid columns
    if (sort && allowedSortColumns.includes(sort)) {
        query += ` ORDER BY ${sort}`;
    } else {
        query += ' ORDER BY RAND()';
    }
    
    // Execute the query using mysql2
    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Query execution error:', err);
            res.status(500).send(err);
        } else {
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
            res.json(results);
        }
    });

});

app.get('/api/searchMedia', (req, res) => {
    const { searchTerm } = req.query;

    let query = 'SELECT * FROM Media WHERE title LIKE ? OR author LIKE ? OR genre LIKE ?';
    const queryParams = [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`];

    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Query execution error:', err);
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });

});

app.get('/api/borrowReserverMedia', (req, res) => {
    const { borrow, media_ID, User_ID = 1 } = req.query;
    let query = ""
    // This cannot be fully implemented as the user registration/login use stories were not implemented which is required
    if (borrow){
    query = 'INSERT INTO borrow (media_ID, user_ID, start_Date, end_Date, return_Date, status) VALUES (?, 1, ?, ?, ?, ?)';
    }
    else{
     query = 'INSERT INTO reservation (media_ID, user_ID, reservation_Date, status) VALUES (?, 1, ?, ?)'
    }
    const queryParams = [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`];

    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Query execution error:', err);
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });

});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;
