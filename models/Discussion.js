const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
});

module.exports = mongoose.model("Discussion", discussionSchema);
