const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('Welcome!');
});

router.use('/post', require('./post'));
router.use('/like', require('./like'));
router.use('/comment', require('./comment'));
router.use('/upload', require('../multer/multer'));

module.exports = router;
