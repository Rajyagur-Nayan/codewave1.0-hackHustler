const jwt = require('jsonwebtoken');
const pool = require('../connections/DB.connect.js')

const checkAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.login_token;

        if (!token) {
            return res.status(401).json({ message: 'Access denied. No login token provided.' });
        }

        // Verify token
        const data = jwt.verify(token, process.env.JWT_SECRET);
        const userId = data.id;

        // Fetch user from DB
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const user = result.rows[0];

        // Check if admin
        if (user.email !== 'admin@me.com') {
            return res.status(403).json({ message: 'You are not admin.' });
        }

        // Attach user to request for downstream use
        req.user = user;

        next(); // Proceed to the route
    } catch (err) {
        console.error('Admin check error:', err);
        return res.status(401).json({ message: 'Invalid or expired token.' });
    }
};

module.exports = checkAdmin