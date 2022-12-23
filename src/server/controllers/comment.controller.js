const commentService = require('../services/comment.service');

exports.createComment = async (req, res) => {
  try {
    return await commentService.createComment(req.query.postId, req.params.comment);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    return commentService.deleteComment(req.params.commentId);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
