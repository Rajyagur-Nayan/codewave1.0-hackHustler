const express = require('express');
const multer = require('multer');
const path = require('path');
const pool = require('../../connections/DB.connect.js');
const { checkFarmer } = require('../../middelwear/roleCheck.js');
const fs = require('fs');
const uploadDir = 'uploads/products';

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const router = express.Router();

// Multer storage setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/products/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-${Math.round(Math.random() * 1e6)}${ext}`;
        cb(null, filename);
    }
});
const upload = multer({ storage });

router.post('/add', checkFarmer, upload.single('image'), async (req, res) => {
    try {
        const { name, price, description, quantity } = req.body;  // <-- added category
        const image_url = req.file ? `/uploads/products/${req.file.filename}` : null;
        const farmer_id = req.user.id;

        const result = await pool.query(
            `INSERT INTO products (farmer_id, name, price, description, stock, image_url)
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [farmer_id, name, price, description, quantity, image_url]
        );

        return res.status(201).json({ message: 'Product added successfully', product: result.rows[0] });
    } catch (error) {
        console.error('Add product error:', error);
        res.status(500).json({ message: 'Server error while adding product' });
    }
});


module.exports = router;
