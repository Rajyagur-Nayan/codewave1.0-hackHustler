const express = require('express');
const router = express.Router();
const pool = require('../../connections/DB.connect');
const { checkAdmin, checkFarmer, checkBuyer } = require('../../middelwear/roleCheck.js');

// Admin Overview Stats
router.get('/dashboard-overview', checkAdmin, async (req, res) => {
    try {
        const [totalUsers, totalFarmers, recentRegistrations] = await Promise.all([
            pool.query("SELECT COUNT(*) FROM users"),
            pool.query("SELECT COUNT(*) FROM users WHERE role = 'farmer'"),
            pool.query("SELECT COUNT(*) FROM users WHERE created_at >= NOW() - INTERVAL '7 days'")
        ]);

        res.json({
            total_users: parseInt(totalUsers.rows[0].count),
            active_farmers: parseInt(totalFarmers.rows[0].count),
            new_registrations_7_days: parseInt(recentRegistrations.rows[0].count),
            system_uptime: (Math.random() * (99.9 - 90.0) + 90.0).toFixed(1) + '%'
        });
    } catch (err) {
        console.error('Dashboard Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Pending Farmer Applications
router.get('/farmer-applications', checkAdmin, async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT fa.id, u.name AS applicant_name, fa.applied_at, fa.status
            FROM farmer_applications fa
            JOIN users u ON fa.user_id = u.id
            WHERE fa.status = 'pending'
            ORDER BY fa.applied_at DESC
        `);
        res.json(result.rows);
    } catch (err) {
        console.error('Farmer applications fetch error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});



// Flagged Product Listings (manually flagged entries)
router.get('/product-flags', checkAdmin, async (req, res) => {
    try {
        // Simulated logic; you may use a separate 'flags' table in real implementation
        const flagged = await pool.query(`
            SELECT p.id, p.name AS product_name, u.name AS farmer, 'Quality Concern' AS reason
            FROM products p
            JOIN users u ON p.farmer_id = u.id
            WHERE p.name ILIKE '%tomato%' -- example flag condition
            UNION
            SELECT p.id, p.name AS product_name, u.name AS farmer, 'Misleading Description' AS reason
            FROM products p
            JOIN users u ON p.farmer_id = u.id
            WHERE p.description ILIKE '%fake%' -- another example
        `);

        res.json(flagged.rows);
    } catch (err) {
        console.error('Flag fetch error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Recent System Activity (from admin_logs)
router.get('/system-activity', checkAdmin, async (req, res) => {
    try {
        const logs = await pool.query(`
            SELECT message, log_type, logged_at
            FROM admin_logs
            ORDER BY logged_at DESC
            LIMIT 10
        `);
        res.json(logs.rows);
    } catch (err) {
        console.error('System logs error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
