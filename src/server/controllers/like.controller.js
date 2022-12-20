const likeService = require('../services/like.service');

exports.createLike = async (req, res) => {
  try {
    const like = await likeService.createLike(req.params.postId);
    res.json({ data: like, message: 'createLike' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteLike = async (req, res) => {
  try {
    const like = await likeService.deleteLike(req.params.postId);
    res.json({ data: like, message: 'deleteLike' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
