const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  sender: { type: String, required: true },
  discussion: { type: mongoose.Schema.Types.ObjectId, ref: "Discussion" },
});

module.exports = mongoose.model("Message", messageSchema);
