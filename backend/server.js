const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// ===============================
// MIDDLEWARES
// ===============================
app.use(
  cors({
    origin: "http://localhost:8080", // frontend
    credentials: true
  })
);

app.use(express.json());

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ===============================
// ROUTES
// ===============================
app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/saved", require("./routes/savedRoutes"));
app.use("/api/liked", require("./routes/likedRoutes"));

// 🌿 CHATBOT ROUTE
app.use("/api", require("./routes/chat.routes"));

// ===============================
// TEST ROUTE
// ===============================
app.get("/api/test", (req, res) => {
  res.json({ status: "OK", message: "Server running properly" });
});

// ===============================
// MONGODB CONNECTION
// ===============================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err.message));

// ===============================
// SERVER START
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
