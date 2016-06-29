var express = require('express');
var about = express.Router();

/* About page */

router.get('/tlp', function(req,res) {
	res.send('tlp');
});

module.exports = router;
