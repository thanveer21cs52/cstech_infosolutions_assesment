const express = require("express");
const router = express.Router();
const Agent = require("../models/agent");
const bcrypt = require("bcrypt");

// Add agent
router.post("/", async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    // Optional: Check if agent already exists
    const exists = await Agent.findOne({ email });
    if (exists) return res.status(400).json({ message: "Agent already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const newAgent = new Agent({ name, email, mobile, password: hashed });
    await newAgent.save();

    res.status(201).json({ message: "Agent created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Get all agents and tasks
router.get("/", async (req, res) => {
  try {
    const agents = await Agent.find({}, "-password");
    res.json(agents);
  } catch (err) {
    res.status(500).json({ message: "Error fetching agents" });
  }
});

// Edit an agent
router.put("/:id", async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    // Find agent by ID
    const agent = await Agent.findById(req.params.id);

    if (!agent) return res.status(404).json({ message: "Agent not found" });

    // Optionally hash the new password if provided
    if (password) {
      agent.password = await bcrypt.hash(password, 10);
    }
    
    // Update agent details
    agent.name = name || agent.name;
    agent.email = email || agent.email;
    agent.mobile = mobile || agent.mobile;

    await agent.save();

    res.json({ message: "Agent updated successfully", agent });
  } catch (err) {
    res.status(500).json({ message: "Error updating agent" });
  }
});

// Delete an agent
router.delete("/:id", async (req, res) => {
  try {
    const agent = await Agent.findById(req.params.id);
    if (!agent) return res.status(404).json({ message: "Agent not found" });

    // Delete agent
    await agent.remove();
    res.json({ message: "Agent deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting agent" });
  }
});

module.exports = router;
