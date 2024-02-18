var express = require('express');
var router = express.Router();
const CryptoJS = require("crypto-js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// --------------------- LÄGGA TILL NY USER -------------------- //

router.post("/notesuser/add", (req, res) => {
  let newUser = req.body;
  const encryptedPassword = CryptoJS.AES.encrypt(newUser.password, "secret key").toString();
  newUser.password = encryptedPassword;

  req.app.locals.db.collection("users").insertOne(newUser)
    .then(result => {
      console.log("Ny användare tillagd:", newUser);
      res.json(newUser);
    })
    .catch(error => {
      console.error("Fel vid tillägg av ny användare:", error);
      res.status(500).json({ error: "Internt serverfel" });
    });
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


module.exports = router;
