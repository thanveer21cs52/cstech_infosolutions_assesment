const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  FirstName: String,
  Phone: String,
  Notes: String,
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" },
});

module.exports = mongoose.model("Task", TaskSchema);
