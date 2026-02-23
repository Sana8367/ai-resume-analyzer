const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const { protect, isAdmin } = require("../middleware/auth.middleware");

router.get("/users", protect, isAdmin, adminController.getAllUsers);
router.get("/top-candidates/:jobId", protect, isAdmin, adminController.getTopCandidates);
router.get("/analytics", protect, isAdmin, adminController.getAnalytics);

module.exports = router;