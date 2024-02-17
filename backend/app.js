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
const connection = require("./lib/conn.js");



app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get("/notes", (req, res) => {

    connection.connect((err) => {
        if(err) console.log("err", err);

        let query = "SELECT name FROM notes WHERE done = 0"; 

        connection.query(query, (err, data) => {
            if(err) console.log("err", err);
            console.log("name", data);
            res.json(data);
        })
    })
})


app.post("/notes", (req, res) => {
    let name = req.body.name;       
    let notes = req.body.notes;
    let userId = req.body.userId;

    connection.connect((err) => {
        if (err) console.log("err", err);
        
        let query = "INSERT into notes (name, notes, userId) VALUES (?, ?, ?)";
        let values = [name, notes, userId];
         
        connection.query(query, values, (err, data) => {
            if(err) console.log("err", err);
            console.log("notes", data);
            res.json({message: "Notes sparad"});
        })
    })  
})



// Fixa till post
// Skriv ut listan på get i frontenden











/*
app.post("/notes", (req, res) => {       
    
    let notes = req.body.notes;

    connection.connect((err) => {
        if (err) console.log("err", err);
// Första ? är note andra ? är userId - i arrayen som kommer på nästa rad. Man gör så för att det inte ska kunna bli hackat.
        let query = "INSERT into notes (notes) VALUES (?)";
        let values = [notes];
         
        connection.query(query, values, (err, data) => {
            if(err) console.log("err", err);
            console.log("notes", data);
            res.json({message: "Notes sparad"});
        })
    })
    
})

*/
module.exports = app;
