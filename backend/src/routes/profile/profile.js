const express = require('express');
const router = express.Router();
const pool = require('../../connections/DB.connect');
const { checkAdmin, checkFarmer, checkBuyer } = require('../../middelwear/roleCheck.js'); // Middleware to check auth

// ✅ GET: Fetch User Profile
router.get('/', checkFarmer, async (req, res) => {
  try {
    const userId = req.user.id; // Extract user id from token

    const result = await pool.query(
      `SELECT id, name, email, created_at FROM users WHERE id = $1`,
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      profile: result.rows[0],
    });
  } catch (err) {
    console.error('Error fetching profile:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// ✅ PUT: Update User Profile
router.put('/', checkFarmer, async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email } = req.body;

    await pool.query(
      `UPDATE users SET name = $1, email = $2 WHERE id = $3`,
      [name, email, userId]
    );

    res.json({
      success: true,
      message: 'Profile updated successfully',
    });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
