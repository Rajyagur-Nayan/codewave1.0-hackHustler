const express = require('express');
const router = express.Router();
const pool = require('../../connections/DB.connect');
const { checkBuyer } = require('../../middelwear/roleCheck.js');

// POST route to submit location form
router.post('/submit', checkBuyer, async (req, res) => {
    const { email, location, city, state, description } = req.body;
    const { id: user_id } = req.user;

    // Validate required fields
    if (!email || !location || !city || !state || !description) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    try {
        await pool.query(
            `INSERT INTO location_forms (user_id, email, state, city, location, description)
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [user_id, email, state, city, location, description]
        );

        res.status(201).json({ message: 'Form submitted successfully.' });
    } catch (err) {
        console.error('Form submission error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
