function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/api/login');
}

function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()) return res.redirect('/');
    next();
}

exports.checkAuthenticated = checkAuthenticated;
exports.checkNotAuthenticated = checkNotAuthenticated;