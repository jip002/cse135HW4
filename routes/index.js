const express = require('express');
const router = express.Router();
const {checkAuthenticated} = require('../middleware/checkAuth');

router.get('/', checkAuthenticated, (req, res) => {
    // if(req.user.admin == true){
    //     res.render('admin.ejs');
    // } else res.render('userActions.ejs');
    res.render('index.ejs');
})

module.exports = router;