const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('Welcome!');
});

router.use('/post', require('./posts'));
router.use('/like', require('./likes'));

module.exports = router;
