const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");
const { protect, isAdmin } = require("../middleware/auth.middleware");

// Admin only
router.post("/", protect, isAdmin, jobController.createJob);
router.put("/:id", protect, isAdmin, jobController.updateJob);
router.delete("/:id", protect, isAdmin, jobController.deleteJob);

// Public
router.get("/", jobController.getJobs);
router.get("/:id", jobController.getJobById);

module.exports = router;