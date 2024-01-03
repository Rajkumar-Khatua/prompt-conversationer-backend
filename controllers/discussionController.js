const Discussion = require('../models/Discussion');

exports.createDiscussion = async (req, res) => {
  try {
    const { title } = req.body;
    const discussion = await Discussion.create({ title });
    res.json(discussion);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to create discussion' });
  }
};

exports.getDiscussionById = async (req, res) => {
  try {
    const { id } = req.params;
    const discussion = await Discussion.findById(id).populate('messages');
    res.json(discussion);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get discussion' });
  }
};

exports.getAllDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find({}).populate('messages');
    res.json(discussions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get discussions' });
  }
};

exports.updateDiscussion = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const discussion = await Discussion.findById(id);
    discussion.title = title;
    await discussion.save();

    res.json(discussion);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update discussion' });
  }
};

exports.deleteDiscussion = async (req, res) => {
  try {
    const { id } = req.params;
    const discussion = await Discussion.findById(id);
    await discussion.deleteOne();
    res.sendStatus(200);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to delete discussion' });
  }
};
