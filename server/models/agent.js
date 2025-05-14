const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  password: String,
  tasks: [
    {
      FirstName: String,
      Phone: String,
      Notes: String,
    },
  ],
});

module.exports = mongoose.model("Agent", AgentSchema);
