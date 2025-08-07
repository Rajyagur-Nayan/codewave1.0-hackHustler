// routes/auth/signup.js
const express = require('express');
const pool = require('../../connections/DB.connect.js');
const { hashPassword } = require('../../utils/hash.js');

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, password, role = 'buyer' } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    if (!['buyer', 'farmer', 'admin'].includes(role)) {
        return res.status(400).json({ error: 'Invalid user role' });
    }

    try {
        const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existing.rows.length > 0) {
            return res.status(409).json({ error: 'User already exists' });
        }

        const hashedPassword = await hashPassword(password);
        const result = await pool.query(`
            INSERT INTO users (name, email, password, role)
            VALUES ($1, $2, $3, $4)
            RETURNING id, name, email, role, created_at
        `, [name, email, hashedPassword, role]);

        res.status(201).json({ message: 'Signup successful', user: result.rows[0] });
    } catch (err) {
        console.error('Signup Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
