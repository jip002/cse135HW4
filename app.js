const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');

//------------------Routes--------------------
const login = require('./routes/login');
const signup = require('./routes/signup');
const index = require('./routes/index');
const users = require('./routes/users');

//----------------Setting-Passport------------
const init = require('./passport-config');
const {findUserByEmail, findUserById} = require('./models/user');
init(passport, findUserByEmail, findUserById);



//--------------App-use-----------------------
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(flash());
app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//--------------Use-Routes--------------------
app.use('/', index);
app.use('/api/login', login);
app.use('/api/signup', signup);
app.use('/api/users', users);
//--------------------------------------------
app.set('view-engine', 'ejs');

mongoose.connect('mongodb://0.0.0.0:27017/test')
    .then(()=> console.log("connected to mongodb..."))
    .catch(err => console.error('could not connect to mongodb...', err));


const port = 3004;
app.listen(port, ()=>{
    console.log(`listening to port : ${port}`);
})