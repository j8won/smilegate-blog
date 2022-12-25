const Comment = require('../models/Comment');

exports.createComment = async (postId, comment) => {
  return Comment.create({ postId: postId, comment: comment});
};

exports.getCommentByPostId = async (postId) => {
  return Comment.find({ postId: postId });
}

exports.deleteComment = async (commentId) => {
  return Comment.findByIdAndDelete({commentId});
};

exports.countComment = async (postId) => {
  const comments = await Comment.find({ postId: postId });
  return [...comments].length;
};
