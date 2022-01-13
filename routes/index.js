var router = require('express').Router();
const passport = require('passport');

router.get('/', function(req, res) {
  res.redirect('/comics'); 
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/comics', // where do you want the client to go after you login 
    failureRedirect : '/comics' // where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/comics');
});

module.exports = router;
