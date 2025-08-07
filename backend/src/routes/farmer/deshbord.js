const express = require('express');
const router = express.Router();
const pool = require('../../connections/DB.connect.js'); // your PostgreSQL pool instance

// GET all products with farmer info
router.get('/', async (req, res) => {
    try {
        const result = await pool.query(`
      SELECT 
        products.id,
        products.name,
        products.price,
        products.description,
        products.stock,
        products.image_url,
        products.created_at,
        users.name AS farmer_name
      FROM products
      JOIN users ON products.farmer_id = users.id
      ORDER BY products.created_at DESC
    `);

        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
