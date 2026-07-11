const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/database");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("🚀 Legal Lens Backend is Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});