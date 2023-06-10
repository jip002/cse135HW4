const express = require('express');
const app = express();
const mongoose = require('mongoose');


//------------------Routes--------------------
const login = require('./routes/login');
const signup = require('./routes/signup');
const index = require('./routes/index');
const users = require('./routes/users');

const init = require('./passport-config');


//--------------App-use-----------------------
app.use(express.json());
app.use(express.urlencoded({extended: false}));

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