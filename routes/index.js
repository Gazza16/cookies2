var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

router.get('/auth', function(req, res, next) {
  res.render('login', { title: 'Successfuly logged in!!' });
});

module.exports = router;
