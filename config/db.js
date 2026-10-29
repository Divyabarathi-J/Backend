
const mongoose = require("mongoose");

const connectDB = async () => {
    const MONGO_URL = process.env.MONGODB_URL;

    if (!MONGO_URL) {
        console.error("Error: MONGODB_URL is missing from .env");
        process.exit(1);
    }

    try {
        console.log("Connecting to MongoDB Atlas...");

        await mongoose.connect(MONGO_URL, {
            serverSelectionTimeoutMS: 15000,
            connectTimeoutMS: 15000,
        });

        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        console.error("Error name:", err.name);

        if (err.reason) {
            console.error("Connection details:", err.reason);
        }

        process.exit(1);
    }
};

module.exports = connectDB;
