const express = require("express");
const router = express.Router();

// 🧠 In-memory category list
const categories = [];

router.post("/add", (req, res) => {
    const { name } = req.body;

    if (!name || typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({ error: "Category name is required." });
    }

    const category = name.trim();

    // Avoid duplicates (case-insensitive)
    const exists = categories.find((c) => c.toLowerCase() === category.toLowerCase());
    if (exists) {
        return res.status(409).json({ message: "Category already exists." });
    }

    categories.push(category);
    return res.status(201).json({ message: "Category added", category });
});

router.get("/all", (req, res) => {
    return res.json({ categories });
});

module.exports = router;
