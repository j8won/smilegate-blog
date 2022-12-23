const commentService = require('../services/comment.service');

exports.createComment = async (req, res) => {
  try {
    const comment = await commentService.createComment(req.query.postId, req.body.comment);
    res.json({data: comment, message: 'createComment'});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getCommentByPostId = async (req, res) => {
  try {
    const comment = await commentService.getCommentByPostId(req.query.postId);
    res.json({data: comment, message: 'getCommentByPostId'});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

exports.deleteComment = async (req, res) => {
  try {
    return commentService.deleteComment(req.params.commentId);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
