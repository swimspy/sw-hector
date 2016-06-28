var express = require('express');
var about = express.Router();

/* About page */

router.get('/create-name-tag', function(req,res) {
	res.send('create-name-tag');
});

module.exports = router;
