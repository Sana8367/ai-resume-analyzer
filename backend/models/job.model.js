const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    requiredSkills: [
      {
        type: String,
      },
    ],
    category: {
      type: String,
      enum: ["Frontend", "Backend", "AI", "Fullstack"],
    },
    experienceLevel: {
      type: String,
      enum: ["Fresher", "1-2 Years", "3-5 Years"],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);