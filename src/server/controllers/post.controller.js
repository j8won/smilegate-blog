const postService = require('../services/post.service');

exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.json({ data: post });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json({ data: posts });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.postId);
    res.json({ data: post });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updatePostById = async (req, res) => {
  try {
    const post = await postService.updatePostById(req.params.postId, req.body);
    res.json({ data: post });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deletePostById = async (req, res) => {
  try {
    const post = await postService.deletePostById(req.params.postId);
    res.json({ data: post });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
