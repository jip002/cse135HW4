const express = require('express');
const router = express.Router();
const passport = require('passport');
const {checkNotAuthenticated} = require('../middleware/checkAuth');

router.get('/', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs');
});

router.post('/', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/api/login',
    failureFlash: false
}));

module.exports = router;