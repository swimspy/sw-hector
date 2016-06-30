var express = require('express');
var about = express.Router();

/* Fraont Page Verion */

router.get('/frontpage', function(req,res) {
	res.send('frontpage');
});

module.exports = router;
