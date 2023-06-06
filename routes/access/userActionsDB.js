const con = require("../../dbConnection.js");

// Creates a new user
function createUser(firstName, lastName, email, password, category) {
  return new Promise(function (resolve) {
    con.query(
      "INSERT INTO  users (firstName, lastName, email, password, category) VALUES (?, ?, ?, ?, ?)",
      [firstName, lastName, email, password, category],
      function (err) {
        if (err) throw err;
        resolve();
      }
    );
  });
}

function getInfoByEmail(email) {
  return new Promise(function (resolve) {
    con.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      function (err, result) {
        if (err) throw err;
        resolve(result);
      }
    );
  });
}

function getAllUsers() {
  return new Promise(function (resolve) {
    con.query("SELECT * FROM users", [], function (err, result) {
      if (err) throw err;
      resolve(result);
    });
  });
}

module.exports = {
  createUser,
  getInfoByEmail,
  getAllUsers,
};
