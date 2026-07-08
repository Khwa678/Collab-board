import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Only allow requests from our known frontend origin, not the entire internet
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));

// Parses incoming JSON request bodies into req.body
app.use(express.json());

// Simple health check — useful for confirming the server is alive
// before wiring up any real routes
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
