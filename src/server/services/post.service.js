const Post = require('../models/Post');
const likeService = require('../services/like.service');
const postService = require('../services/comment.service');

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
  const posts = await Post.find({ category: postType }).lean();
  let data = [];

  for ( let i = 0; i < posts.length; i++ ) {
    data.push({
      ...posts[i],
      'cntLike': await likeService.countLike(posts[i]._id),
      'cntComment': await postService.countComment(posts[i]._id),
    });
  }

  return data;
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
