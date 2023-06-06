const express = require("express");
const { updateUserPassword } = require("./access/userActionsDB.js");
const { hashPassword } = require("./access/crypto.js");
const router = express.Router();

const updateUserInfo = require("./access/userActionsDB.js").updateUserInfo;

const isValidRequest = (body) => {
  return (
    body.email &&
    body.firstName &&
    body.lastName &&
    body.address &&
    body.category
  );
};
router.post("/updateUserInfo", async function (req, res) {
  if (!isValidRequest(req.body)) {
    res.status(401).json({ error: "Something went wrong" });
  } else {
    if (req.body.password !== "") {
      await updateUserPassword(
        req.body.email,
        await hashPassword(req.body.password)
      );
    }

    console.log(req.body);
    await updateUserInfo(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.address,
      req.body.category,
      req.body.project_id
    );

    return res.json({});
  }
});

module.exports = router;
