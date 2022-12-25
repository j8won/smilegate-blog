const router = require('express').Router();
const {
  createLike,
  deleteLike,
  getLike
} = require('../controllers/like.controller');

router.route('/:postId').put(createLike).delete(deleteLike).get(getLike);
module.exports = router;
