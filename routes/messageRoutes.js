const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

// Routes for messages within a discussion
router.post("/:discussionId/message", messageController.createMessage);
router.get("/:discussionId/message/:messageId", messageController.getMessageById);
router.get("/:discussionId/message", messageController.getAllMessages);
router.put("/:discussionId/message/:messageId", messageController.updateMessage);
router.delete("/:discussionId/message/:messageId", messageController.deleteMessage);
router.delete("/:discussionId/message", messageController.deleteAllMessages);

module.exports = router;
