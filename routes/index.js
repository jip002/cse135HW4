const express = require('express');
const router = express.Router();
const {checkAuthenticated} = require('../middleware/checkAuth');

router.get('/', checkAuthenticated, (req, res) => {
    console.log('homepage GET');
    res.render('index.ejs');
})

module.exports = router;