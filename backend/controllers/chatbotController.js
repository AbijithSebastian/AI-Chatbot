const OpenAI = require("openai");
require("dotenv").config();


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});


const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body; 

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }


    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", 
      messages: [{ role: "user", content: message }],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { chatWithAI };
