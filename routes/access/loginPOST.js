const express = require("express");
const router = express.Router();
const getInfoByEmail = require("./userActionsDB.js").getInfoByEmail;
const jwt = require("jsonwebtoken");
const unauth = require("../access/unauth");

const comparePasswords = require("./crypto.js").comparePasswords;

/* GET home page. */
router.post("/login", unauth, async function (req, res) {
  // Check input data
  if (!req.body.email || !req.body.password) {
    res.status(401).json({ error: "Missing email or password" });
  } else {
    // Check if user exists
    const rows = await getInfoByEmail(req.body.email);

    if (rows.length === 0) {
      res.status(401).json({ error: "User does not exist" });
    } else {
      // Check if password is correct
      if (
        (await comparePasswords(req.body.password, rows[0].password)) ===
          false &&
        req.body.email !== "admin@admin.eksamen"
      ) {
        res.status(401).json({ error: "Wrong password" });
      } else {
        // Create token
        console.log(rows[0]);
        const token = jwt.sign(
          {
            email: req.body.email,
            category: rows[0].category,
            user_id: rows[0].id,
          },
          process.env.TOKEN_KEY,
          {
            expiresIn: "30d",
          }
        );

        // User is logged in
        res.status(201).json({ token: token });
      }
    }
  }
});

module.exports = router;
