const postService = require('../services/post.service');

exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.json({ data: post, message: 'createPost' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json({ data: posts, message: 'getAllPosts' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAllPostsByType = async (req, res) => {
  try {
    const posts = await postService.getAllPostsByType(req.query.type);
    res.json({ data: posts, message: 'getAllPostsByType'});
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.postId);
    res.json({ data: post, message: 'getPostById' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updatePostById = async (req, res) => {
  try {
    const post = await postService.updatePostById(req.params.postId, req.body);
    res.json({ data: post, message: 'updatePostById' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deletePostById = async (req, res) => {
  try {
    const post = await postService.deletePostById(req.params.postId);
    res.json({ data: post, message: 'deletePostById' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
