const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('Welcome!');
});

router.use('/post', require('./posts'));
router.use('/like', require('./like'));
router.use('/comment', require('./comment'));

module.exports = router;
