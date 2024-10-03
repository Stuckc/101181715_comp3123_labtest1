// Import express module

const express = require('express');
const app = express();

// define the basic route

app.get('/', (req, res) => {
  res.send('Hello, World! This is COMP3123 Lab Test.');
});

// start server on port 3000

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});