const express = require('express');
const router = express.Router();
const pool = require('../../connections/DB.connect.js');
const { checkAdmin, checkFarmer, checkBuyer } = require('../../middelwear/roleCheck.js');

// Save or update subscription preferences (only for buyers)
router.post('/save-preferences', checkBuyer, async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      dietary_needs,
      produce_love,
      produce_dislike,
      allergies,
      frequency
    } = req.body;

    const preferences = {
      dietary_needs,
      produce_love,
      produce_dislike,
      allergies
    };

    const existing = await pool.query(
      'SELECT id FROM subscriptions WHERE user_id = $1',
      [userId]
    );

    if (existing.rowCount > 0) {
      // Update
      await pool.query(
        'UPDATE subscriptions SET preferences = $1, frequency = $2 WHERE user_id = $3',
        [preferences, frequency, userId]
      );
    } else {
      // Insert
      await pool.query(
        `INSERT INTO subscriptions (user_id, preferences, frequency) 
         VALUES ($1, $2, $3)`,
        [userId, preferences, frequency]
      );
    }

    res.status(200).json({ message: 'Preferences saved successfully' });
  } catch (err) {
    console.error('Error saving preferences:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
