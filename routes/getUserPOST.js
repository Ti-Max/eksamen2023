const express = require("express");
const { getInfoByEmail } = require("./access/userActionsDB.js");
const router = express.Router();

const getAllUsers = require("./access/userActionsDB.js").getAllUsers;

router.post("/getUser", async function (req, res) {
  // insert solve to database
  const user = await getInfoByEmail(req.body.email);

  return res.json({ user: user });
});

module.exports = router;
