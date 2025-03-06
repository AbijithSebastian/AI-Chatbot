const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://csetechy2026:btcbivgZZ55rLMBN@cluster0.mongodb.net/ai_chatbot?retryWrites=true&w=majority";

const testDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(" MongoDB Connected Successfully");
    process.exit();
  } catch (error) {
    console.error(" MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

testDB();
