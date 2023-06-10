const express = require('express');
const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    res.render('login.ejs');
});

// router.post('/', async (req, res) => {
//     const {error} = validate(req.body);
//     if(error) return res.status(400).send(error.details[0].message);

//     let user = await User.findOne({ email: req.body.email });
//     if(!user) return res.status(400).send('Invalid email');

//     const validPassword = await bcrypt.compare(req.body.password, user.password);
//     if(!validPassword) return res.status(400).send('Invalid password');

//     res.redirect('/');
// });

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/api/login',
    failureFlash: false
}));

module.exports = router;