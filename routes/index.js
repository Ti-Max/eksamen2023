const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res) {
  res.render("index", {
    userdata: {
      email: req.email,
      category: req.category,
    },
  });
});

module.exports = router;
