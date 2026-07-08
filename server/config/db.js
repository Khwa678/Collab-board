import mongoose from "mongoose";

/**
 * Connects to MongoDB using the URI from environment variables.
 * Exits the process if the connection fails, since the app is
 * useless without a database — better to fail loudly at startup
 * than to silently serve broken requests later.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
