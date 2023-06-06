const express = require("express");
const router = express.Router();

// database actions
const getInfoByEmail = require("./userActionsDB.js").getInfoByEmail;
const createUser = require("./userActionsDB.js").createUser;

// Hashing password
const hashPassword = require("./crypto.js").hashPassword;

router.post("/signup", async function (req, res) {
  // Check input data
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.password ||
    !req.body.category ||
    !req.body.email
  ) {
    res.status(400).json({ error: "Missing something" });
  } else {
    // Check if user exists
    let rows = await getInfoByEmail(req.body.email);
    if (rows.length > 0) {
      return res.status(409).json({ error: "Email already in use" });
    }

    // Check if email in use
    rows = await getInfoByEmail(req.body.email);
    if (rows.length > 0) {
      return res.status(409).json({ error: "Email already in use" });
    } else {
      // Create user
      await createUser(
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        await hashPassword(req.body.password),
        req.body.category
      );

      res.status(201).json({});
    }
  }
});

module.exports = router;
