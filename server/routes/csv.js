const express = require("express");
const router = express.Router();
const multer = require("multer");
const csv = require("csvtojson");
const Agent = require("../models/agent");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST /api/csv/upload
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const jsonArray = await csv().fromString(req.file.buffer.toString());

    const agents = await Agent.find();
    if (agents.length === 0) return res.status(400).json({ message: "No agents available" });

    const chunkSize = Math.floor(jsonArray.length / agents.length);
    let start = 0;

    for (let i = 0; i < agents.length; i++) {
      const end = i === agents.length - 1 ? jsonArray.length : start + chunkSize;
      const chunk = jsonArray.slice(start, end);
      await Agent.findByIdAndUpdate(agents[i]._id, { tasks: chunk });
      start = end;
    }

    res.json({ message: "CSV tasks distributed to agents" });
  } catch (err) {
    res.status(500).json({ message: "CSV upload failed" });
  }
});

module.exports = router;
