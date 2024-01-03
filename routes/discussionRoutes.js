const express = require('express');
const router = express.Router();
const discussionController = require("../controllers/discussionController.js");


router.post('/', discussionController.createDiscussion);
router.get('/:id', discussionController.getDiscussionById);
router.get('/', discussionController.getAllDiscussions);
router.put('/:id', discussionController.updateDiscussion);
router.delete('/:id', discussionController.deleteDiscussion);

module.exports = router;

