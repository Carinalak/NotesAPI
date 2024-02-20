var express = require('express');
var router = express.Router();
const mysql = require("mysql2"); 
const CryptoJS = require("crypto-js");


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

    let query = "INSERT into notesuser (name, email, password) VALUES (?, ?, ?)"; 
    let values = [name, email, password];

        connection.query(query, values, (err, data) => {
            if(err) console.log("err", err);
            console.log("Ny användare tillagd:", newUser);
            res.json({message: "User sparad"});
        })

    .then(result => {

      console.log("Ny användare tillagd:", newUser);
      res.json(newUser);
    })
    .catch(error => {
      console.error("Fel vid tillägg av ny användare:", error);
      res.status(500).json({ error: "Internt serverfel" });
    });
});
});


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



// ------------------- LOGGA IN USER ---------------------- //

router.post("/login", (req, res) => {
  const { userId, password } = req.body;

  connection.query("SELECT * FROM users WHERE userId = ?", [userId], (err, results) => {
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
*/






module.exports = router;
