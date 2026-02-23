const Job = require("../models/job.model");

// CREATE JOB
exports.createJob = async (req, res, next) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({ success: true, job });
  } catch (error) {
    next(error);
  }
};

// GET ALL JOBS
exports.getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.json({ success: true, jobs });
  } catch (error) {
    next(error);
  }
};

// GET SINGLE JOB
exports.getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json({ success: true, job });
  } catch (error) {
    next(error);
  }
};

// UPDATE JOB
exports.updateJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ success: true, job });
  } catch (error) {
    next(error);
  }
};

// DELETE JOB
exports.deleteJob = async (req, res, next) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Job deleted" });
  } catch (error) {
    next(error);
  }
};