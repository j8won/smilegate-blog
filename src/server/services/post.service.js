const Post = require('../models/Post');

exports.createPost = async (post) => {
  return await Post.create({
    title: post.title,
    content: post.content,
    category: post.category,
    thumbnailUrl: post.thumbnailUrl,
    imageUrlArray: post.imageUrlArray
  });
};

exports.getAllPosts = async () => {
  return Post.find();
};

exports.getAllPostsByType = async ( postType ) => {
  return Post.find({ category: postType });
}

exports.getPostById = async (postId) => {
  return Post.findById(postId);
};

exports.updatePostById = async (postId, post) => {
  return Post.findByIdAndUpdate(postId, post);
};

exports.deletePostById = async (postId) => {
  return Post.findByIdAndDelete(postId);
}
