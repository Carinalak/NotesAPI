var express = require('express');
var router = express.Router();
const mysql = require("mysql2"); 
const CryptoJS = require("crypto-js");
const connection = require("../lib/conn.js");



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// --------------------- LÄGGA TILL NY USER -------------------- //

router.post("/notes/notesuser", (req, res) => {
  
  let name = req.body.name;       
  let email = req.body.email;
  let password = req.body.password;
  let newUser = req.body;

  const encryptedPassword = CryptoJS.AES.encrypt(password, "secret key").toString();
    newUser.password = encryptedPassword;

  connection.connect((err) => {
    if(err) console.log("err", err);

    let query = "INSERT INTO notesuser (name, email, password) VALUES (?, ?, ?)"; 
    let values = [name, email, newUser.password];

        connection.query(query, values, (err, data) => {
            if(err) console.log("err", err);
            console.log("Ny användare tillagd:", newUser);
            res.json({message: "User sparad"});
        })
});
});

// ------------------- LOGGA IN USER ---------------------- //

router.post("/notes/notesuser/login", (req, res) => {
  const { email, password } = req.body;

  connection.query("SELECT * FROM notesuser WHERE email = ?", [email], (err, results) => {
      if (err) {
          console.error("Error in database query:", err);
          return res.status(500).json({ message: "Database error" });
      }

      if (results.length === 0) {
          return res.status(401).json({ message: "User not found" });
      }

      const user = results[0];
      const decryptedPassword = CryptoJS.AES.decrypt(user.password, "secret key").toString(CryptoJS.enc.Utf8);

      if (decryptedPassword === password) {
          return res.json({ message: "Login successful" });
      } else {
          return res.status(401).json({ message: "Invalid credentials" });
      }
  });
});



// HÄMTA ALLA USERS

router.get("/notes/notesuser", (req, res) => {

  connection.connect((err) => {
      if(err) console.log("err", err);

      let query = "SELECT * FROM notesuser";

      connection.query(query, (err, data) => {
          if(err) console.log("err", err);
          console.log("name", data);
          res.json(data);
      })
  })
})






/*
// ----------- HÄMTA SPECIFIK USER // SKICKA HELA OBJEKTET ----------- //

router.post("/", (req, res) => {
  let id = new ObjectId(req.body.id);

  req.app.locals.db.collection("users").findOne({ _id: id })
    .then(user => {
      if (user) {
        res.json(user);
        console.log("Användare: ", user);
      } else {
        res.status(404).json({ error: "Användaren hittades inte." });
        console.log("Användaren hittades inte, kan vara fel");
      }
    })
});

*/





module.exports = router;
