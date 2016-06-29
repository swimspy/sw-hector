var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/tlp', function(req, res) {
  res.render('tlp', { title: 'Test Landing Page' });
  console.log('test landing page');
});


router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
  console.log('about page is loaded');
});

router.get('/create-name-tag', function(req, res) {
  res.render('create-name-tag', { title: 'Create Your Name Tag' });
});

router.get('/your-name', function(req, res) {
  res.render('your-name', { title: 'What Is Your Name?' });
});

router.get('/create-your-home-page', function(req, res) {
  res.render('create-your-home-page', { title: 'Create Your Own Home Page' });
});

router.get('/confirm-details', function(req, res) {
  res.render('confirm-details', { title: 'Confirm Details' });
});

router.get('/send-invitations', function(req, res) {
  res.render('send-invitations', { title: 'Send Invitations To Your Friends' });
});

router.get('/welcome-explore', function(req, res) {
  res.render('welcome-explore', { title: 'Welcome and Explore Swimspy' });
});


module.exports = router;
