const express = require('express');
const router = express.Router();
const pool = require('../../db');
const { isAdmin, isLoggedIn } = require('../../middleware/auth');

// GET /api/admin/dashboard - Admin Panel Overview
router.get('/', isLoggedIn, isAdmin, async (req, res) => {
  try {
    const [
      totalUsers,
      activeFarmers,
      newRegistrations,
      pendingApplications,
      flaggedProducts,
      recentActivity
    ] = await Promise.all([
      pool.query(`SELECT COUNT(*) FROM users`),
      pool.query(`SELECT COUNT(*) FROM users WHERE role = 'farmer'`),
      pool.query(`SELECT COUNT(*) FROM users WHERE created_at >= NOW() - INTERVAL '7 days'`),
      pool.query(`
        SELECT u.name AS applicant_name, fa.applied_at, fa.status
        FROM farmer_applications fa
        JOIN users u ON fa.user_id = u.id
        WHERE fa.status = 'pending'
        ORDER BY fa.applied_at DESC
      `),
      pool.query(`
        SELECT p.name AS product_name, u.name AS farmer_name, p.flag_reason
        FROM products p
        JOIN users u ON p.farmer_id = u.id
        WHERE p.is_flagged = TRUE
        ORDER BY p.created_at DESC
      `),
      pool.query(`
        SELECT message, log_type, logged_at
        FROM admin_logs
        ORDER BY logged_at DESC
        LIMIT 10
      `)
    ]);

    res.status(200).json({
      total_active_users: Number(totalUsers.rows[0].count),
      active_farmers: Number(activeFarmers.rows[0].count),
      new_registrations_7_days: Number(newRegistrations.rows[0].count),
      pending_farmer_applications: pendingApplications.rows,
      flagged_products: flaggedProducts.rows,
      recent_system_activity: recentActivity.rows,
      system_uptime: '99.9%' // placeholder — use monitoring tool for real uptime
    });
  } catch (err) {
    console.error('Error loading admin dashboard:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
