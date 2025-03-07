const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// ✅ Correctly mounting API routes
const chatbotRoutes = require("./routes/chatbotRoutes");
app.use("/api", chatbotRoutes);

// ✅ Add a default route
app.get("/", (req, res) => {
    res.send("Server is running! Use /api/chat to interact with the chatbot.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
