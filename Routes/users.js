const express = require('express');
const router = express.Router();

// Mock user data (in a real application, this would come from a database)
const users = [
    { id: 1, name: "Jonathan Weir" },
    { id: 2, name: "Example Two" },
];

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// GET a user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});

// Export the router
module.exports = router;