const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();
const authMiddleware = require("./middleware/authMiddleware");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Resume Intelligence Engine Running 🚀");
});

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route working",
    user: req.user
  });
});


app.use("/api/resume", resumeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));