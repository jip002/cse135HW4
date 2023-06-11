const express = require('express');
const router = express.Router();
const {checkAuthenticated} = require('../middleware/checkAuth');

router.get('/', checkAuthenticated, (req, res) => {
    if(req.user.admin == true){
        res.render('admin.ejs');
    } else res.render('index.ejs');
})

router.get('/detailed', checkAuthenticated, (req, res) => {
    res.render('userActions.ejs');
})

module.exports = router;