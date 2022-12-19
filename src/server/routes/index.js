const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('Welcome!');
});

router.use('/posts', require('./posts'));

module.exports = router;
