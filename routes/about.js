var express = require('express');
var about = express.Router();

/* About page */

router.get('/about', function(req,res) {
	res.send('about');
});

module.exports = router;
