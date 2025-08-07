const express = require("express");
const router = express.Router();
const getGeminiResponse = require("../../controllers/gemini.js");
const { checkFarmer } = require('../../middelwear/roleCheck.js');
const { checkBuyer } = require('../../middelwear/roleCheck.js');
const { checkAdmin } = require('../../middelwear/roleCheck.js');

router.post("/", checkFarmer, checkBuyer, checkAdmin, async (req, res) => {
    const { userMessage } = req.body;

    if (!userMessage) {
        return res.status(400).json({ error: "Message is required." });
    }

    try {
        const aiPrompt = `
You're an assistant helping farmers and buyers communicate clearly about produce, prices, and delivery.

Respond to this message as naturally and helpfully as possible:

"${userMessage}"
    `.trim();

        const aiResponse = await getGeminiResponse(aiPrompt);

        return res.json({
            reply: aiResponse.trim(),
        });
    } catch (err) {
        console.error("Gemini chat error:", err.message);
        return res.status(500).json({ error: "AI failed to respond." });
    }
});

module.exports = router;
