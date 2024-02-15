var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require("mysql2"); 
let cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.locals.con = mysql.createConnection({  
    host: "localhost",  
    port: "",               
    user: "",  
    password: "",  
    database: ""  
});  


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
