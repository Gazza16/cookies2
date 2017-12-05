var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

router.get('/auth', function(req, res, next) {
	if (!req.session.loggedIn) {
		req.session.loggedIn = true
		req.session.loggedIn.date  = new Date.toLocaleString();
	}	

  res.render('login', { title: 'Successfuly logged in!!' });
});

router.get('/secure', function(req, res, next) {
	if (req.session.loggedIn) {
		res.render('index', { title: 'You are logged in' })
		console.log(req.session.loggedIn)
	} else {
		res.render('index', { title: 'You are not logged in' })
	}
  ;

});

module.exports = router;
