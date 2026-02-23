const User = require("../models/user.model");
const Resume = require("../models/resume.model");
const Match = require("../models/match.model");
const Job = require("../models/job.model");

// View all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({ success: true, users });
  } catch (error) {
    next(error);
  }
};

// Top candidates per job
exports.getTopCandidates = async (req, res, next) => {
  try {
    const { jobId } = req.params;

    const matches = await Match.find({ jobId })
      .sort({ matchPercentage: -1 })
      .populate("userId");

    res.json({ success: true, matches });
  } catch (error) {
    next(error);
  }
};

// Analytics
exports.getAnalytics = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalResumes = await Resume.countDocuments();
    const totalJobs = await Job.countDocuments();

    res.json({
      success: true,
      analytics: {
        totalUsers,
        totalResumes,
        totalJobs,
      },
    });
  } catch (error) {
    next(error);
  }
};