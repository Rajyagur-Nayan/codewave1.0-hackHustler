// routes/auth/login.js
const express = require('express');
const pool = require('../../connections/DB.connect.js');
const { comparePassword } = require('../../utils/hash.js');
const { generateToken } = require('../../utils/jwt.js');

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const userQuery = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        if (userQuery.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = userQuery.rows[0];
        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        };

        const token = generateToken(payload);

        res
            .status(200)
            .cookie('farmfresh_token', token, {
                httpOnly: false,
                secure: false,
                sameSite: 'Lax',
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            })
            .json({ message: 'Login successful', token, user: payload });

    } catch (err) {
        console.error('Login Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
