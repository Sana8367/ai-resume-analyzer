const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
    matchPercentage: Number,
    matchedSkills: [String],
    missingSkills: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Match", matchSchema);