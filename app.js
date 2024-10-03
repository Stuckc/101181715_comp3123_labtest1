const express = require('express');
const app = express();

// Importing user routes
const userRoutes = require('./Routes/users');

// Middleware to parse JSON requests
app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to LabTest1'); 
});

// Use user routes under /api/users
app.use('/api/users', userRoutes);

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});