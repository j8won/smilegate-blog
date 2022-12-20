const router = require('express').Router();
const {
  createPost,
  getAllPosts,
  getAllPostsByType,
  getPostById,
  updatePostById,
  deletePostById
} = require('../controllers/post.controller')

router.route('/').get(getAllPosts).post(createPost);
router.route('/category').get(getAllPostsByType);
router.route('/:postId').get(getPostById).put(updatePostById).delete(deletePostById);

module.exports = router;
