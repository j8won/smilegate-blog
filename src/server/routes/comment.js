const router = require('express').Router();
const {
  createComment,
  deleteComment,
  getCommentByPostId
} = require('../controllers/comment.controller')

router.route('/').post(createComment).delete(deleteComment).get(getCommentByPostId);
module.exports = router;
