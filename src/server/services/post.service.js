const Post = require('../models/Post');

exports.createPost = async (post) => {
  return Post.create(post);
};

exports.getAllPosts = async () => {
  return Post.find();
};

exports.getPostById = async (postId) => {
  return Post.findById(postId);
};

exports.updatePostById = async (postId, post) => {
  return Post.findByIdAndUpdate(postId, post);
};

exports.deletePostById = async (postId) => {
  return Post.findByIdAndDelete(postId);
}
