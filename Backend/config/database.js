const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const connectDB = async () => {
    try {
        // Connecting to MongoDB
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/Sustain`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(
            `\n MongoDB connected! DB host: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
