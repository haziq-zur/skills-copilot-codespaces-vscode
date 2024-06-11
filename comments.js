// Create web server
const express = require('express');
const app = express();

// Define a route for comments
app.get('/comments', (req, res) => {
    // Your logic to fetch and return comments goes here
    res.send('Comments will be displayed here.');
});

// Listen on port 8080
app.listen(8080, () => {
    console.log('Express server is running at (http://localhost:8080/)');
});