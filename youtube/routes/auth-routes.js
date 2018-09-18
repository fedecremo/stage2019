const router = require('express').Router();
const passport = require('passport');

//auth log in
router.get('/login', (req, res) => {
  res.render('login', {user: req.user});
});

//auth log out
router.get('/logout', (req, res) =>{
  //handle with passport
  req.logout();
  res.redirect('/');
  //with req.logout() viene cambiato il cookie quindi il browser non riconosce lo user
});

//auth with google
router.get('/google', passport.authenticate('google', {
  //scope contains what we want to get from the logged google account
  scope: ['profile']
}));

// callback routes for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  //currently logged user: req.user
  //res.send(req.user)
  res.redirect('/profile/')
});


module.exports = router;
