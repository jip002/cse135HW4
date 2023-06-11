const express = require('express');
const router = express.Router();
const {checkAuthenticated} = require('../middleware/checkAuth');

router.delete('/', checkAuthenticated, (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.render('logout.ejs');
      });
});

module.exports = router;