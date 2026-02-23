const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  originalFileName: String,
  parsedText: String,
  extractedSkills: Object,
  score: Number,
  suggestions: Array
}, { timestamps: true });

module.exports = mongoose.model("Resume", resumeSchema);