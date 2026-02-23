const Job = require("../models/job.model");
const Match = require("../models/match.model");
const Resume = require("../models/resume.model"); // Sana's model
const { calculateMatch } = require("../utils/match.utils");

exports.matchResumeToJob = async (req, res, next) => {
  try {
    const { resumeId, jobId } = req.params;

    const resume = await Resume.findById(resumeId);
    const job = await Job.findById(jobId);

    if (!resume || !job) {
      return res.status(404).json({ message: "Not found" });
    }

    const result = calculateMatch(
      resume.extractedSkills,
      job.requiredSkills
    );

    const match = await Match.create({
      userId: resume.userId,
      resumeId,
      jobId,
      ...result,
    });

    res.json({ success: true, match });
  } catch (error) {
    next(error);
  }
};