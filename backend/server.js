const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db"); 
const chatRoutes = require("./routes/chatbotRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Root Route to Check If Server is Running
app.get("/", (req, res) => {
    res.send("Backend is running successfully!");
});

// ✅ Chatbot API Routes
app.use("/api", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
