const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY, 
    baseURL: "https://openrouter.ai/api/v1", 
});

// ✅ Test Route to Check API
router.get("/chat", (req, res) => {
    res.json({ message: "Chatbot API is working! Use POST /api/chat to chat." });
});

// ✅ Chatbot Response Route
router.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const response = await openai.chat.completions.create({
            model: "openai/gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
        });

        res.json({ reply: response.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to generate response." });
    }
});

module.exports = router;
