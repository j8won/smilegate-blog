const Like = require('../models/Like');

exports.createLike = async (postId) => {
  return Like.create({ postId: postId });
};

exports.deleteLike = async (postId) => {
  return Like.findOneAndDelete({ postId: postId });
};

exports.countLike = async (postId) => {
  const likes = await Like.find({ postId: postId});
  return [...likes].length;
};
 
