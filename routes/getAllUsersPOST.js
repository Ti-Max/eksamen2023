const express = require("express");
const router = express.Router();

const getAllUsers = require("./access/userActionsDB.js").getAllUsers;

router.post("/getAllUsers", async function (req, res) {
  // insert solve to database
  const users = await getAllUsers();

  return res.json({ users: users });
});

module.exports = router;
