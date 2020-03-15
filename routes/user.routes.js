const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  const user = req.user;
  if(user === undefined){
    res.redirect('no-permission');
  } else {
    next();
  }
};

router.get('/logged',isLogged, (req, res) => {
  res.render('logged', {firstName: req.user.name.givenName, lastName: req.user.name.familyName, photo: req.user.photos[0].value });
});

router.get('/profile',isLogged, (req, res) => {
  res.render('profile');
});

router.get('/settings',isLogged, (req, res) => {
  res.render('settings');
});


router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;