const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

async function init(passport, getUserByEmail, getUserById){
    const authenticateUser = async (email, password, done) => {
        const user = await getUserByEmail(email);
        if(!user) return done(null, false, {message: 'No user with that email'});
        try {
            if(await bcrypt.compare(password, user.password)) return done(null, user);
            else return done(null, false, {message: 'Password incorrect'});
        }
        catch (e){
            return done(e);
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'email'}, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id));
    //passport.deserializeUser((id, done) => done(null, getUserById(id)));
    passport.deserializeUser((id, done) => {
        getUserById(id).then(user => done(null, user))
    });
}

module.exports = init;