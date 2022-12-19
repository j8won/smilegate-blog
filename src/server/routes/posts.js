const router = require('express').Router();
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById
} = require('../controllers/post.controller')

router.route('/').get(getAllPosts).post(createPost);
router.route('/:postId').get(getPostById).put(updatePostById).delete(deletePostById);

module.exports = router;
