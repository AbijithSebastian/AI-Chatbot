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

// ✅ Make sure the route is correctly prefixed
app.use("/api", chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
