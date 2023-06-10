const express = require('express');
const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const {checkNotAuthenticated} = require('../middleware/checkAuth');

const router = express.Router();

router.get('/', checkNotAuthenticated, (req, res) => {
    res.render('signup.ejs');
});

router.post('/', checkNotAuthenticated, async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send('Email already registered.');

    user = new User({
        email: req.body.email,
        password: req.body.password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    result = await user.save();
    console.log(result);

    res.redirect('/api/login');
});

module.exports = router;