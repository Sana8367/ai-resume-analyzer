const Resume = require("../models/Resume");
const pdfParse = require("pdf-parse");
const fs = require("fs");

exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = req.file.path;

    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(dataBuffer);

    // Clean text
    const cleanText = pdfData.text
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

    const resume = await Resume.create({
      userId: req.user.id,
      originalFileName: req.file.originalname,
      parsedText: cleanText
    });

    res.status(201).json({
      success: true,
      message: "Resume uploaded and parsed successfully",
      resumeId: resume._id
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};