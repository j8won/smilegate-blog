const router = require('express').Router();
const {
  createLike,
  deleteLike
} = require('../controllers/like.controller');

router.route('/:postId').put(createLike).delete(deleteLike);
module.exports = router;
