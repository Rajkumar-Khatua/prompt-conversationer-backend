const Discussion = require("../models/Discussion");
const Message = require("../models/Message");

exports.createMessage = async (req, res) => {
  try {
    const { discussionId } = req.params;
    const { content, sender } = req.body;

    // console.log("Discussion ID:", discussionId);
    // console.log("Content:", content);
    // console.log("Sender:", sender);

    const discussion = await Discussion.findById(discussionId);

    if (!discussion) {
      return res.status(404).json({ error: "Discussion not found" });
    }

    const message = await Message.create({ content, sender });
    discussion.messages.push(message);
    await discussion.save();

    res.json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create message" });
  }
};

// Get a message by ID (within a discussion) - GET /api/messages/:discussionId/message/:messageId
exports.getMessageById = async (req, res) => {
  try {
    const { discussionId, messageId } = req.params;
    const discussion = await Discussion.findById(discussionId).populate(
      "messages"
    );

    if (!discussion) {
      return res.status(404).json({ error: "Discussion not found" });
    }

    const message = discussion.messages.find(
      (msg) => msg._id.toString() === messageId
    );

    if (!message) {
      return res
        .status(404)
        .json({ error: "Message not found within the discussion" });
    }

    res.json({
      _id: message._id,
      content: message.content,
      sender: message.sender,
      // Add other fields if needed
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to get message" });
  }
};
// Get all messages within a discussion - GET /api/messages/:discussionId/message
exports.getAllMessages = async (req, res) => {
  try {
    // Find the discussion by ID
    const { discussionId } = req.params;
    // Populate the messages field
    const discussion = await Discussion.findById(discussionId).populate(
      "messages"
    );
    // If the discussion is not found, return an error message with status 404 (not found)
    if (!discussion) {
      return res.status(404).json({ error: "Discussion not found" });
    }

    // If the discussion is empty, return an empty array
    if (discussion.messages.length === 0) {
      return res.json({
        messages: [] + "No messages in this discussion yet :(",
      });
    }

    // If the discussion is not empty, return the messages
    // Return the messages
    const messages = discussion.messages.map((message) => ({
      _id: message._id,
      content: message.content,
      sender: message.sender,
      // Add other fields if needed
    }));

    // return the messages in JSON format
    res.json(messages);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to get messages within the discussion" });
  }
};

// exports.getAllMessages = async (req, res) => {
//   try {
//     const messages = await Message.find({});
//     res.json(messages);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Failed to get messages" });
//   }
// };
// Update a message - PUT /api/messages/:discussionId/message/:messageId
exports.updateMessage = async (req, res) => {
  try {
    const { discussionId, messageId } = req.params;
    const { content } = req.body;

    const discussion = await Discussion.findById(discussionId).populate(
      "messages"
    );

    if (!discussion) {
      return res.status(404).json({ error: "Discussion not found" });
    }

    const message = discussion.messages.find(
      (msg) => msg._id.toString() === messageId
    );

    if (!message) {
      return res
        .status(404)
        .json({ error: "Message not found within the discussion" });
    }

    message.content = content;
    await message.save();

    res.json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update message" });
  }
};

// Delete a message - DELETE /api/messages/:discussionId/message/:messageId
exports.deleteMessage = async (req, res) => {
  try {
    const { discussionId, messageId } = req.params;
    const discussion = await Discussion.findById(discussionId).populate(
      "messages"
    );

    if (!discussion) {
      return res.status(404).json({ error: "Discussion not found" });
    }

    const message = discussion.messages.find(
      (msg) => msg._id.toString() === messageId
    );

    if (!message) {
      return res
        .status(404)
        .json({ error: "Message not found within the discussion" });
    }

    await message.deleteOne();
    discussion.messages = discussion.messages.filter(
      (msg) => msg._id.toString() !== messageId
    );
    await discussion.save();

    res.json({ message: "Message deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete message" });
  }
};

// Delete all messages - DELETE /api/messages/:discussionId/message
exports.deleteAllMessages = async (req, res) => {
  try {
    const { discussionId } = req.params;
    const discussion = await Discussion.findById(discussionId).populate(
      "messages"
    );

    if (!discussion) {
      return res.status(404).json({ error: "Discussion not found" });
    }

    discussion.messages.forEach(async (message) => await message.remove());
    discussion.messages = [];
    await discussion.save();

    res.json({ message: "All messages deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete all messages" });
  }
};
