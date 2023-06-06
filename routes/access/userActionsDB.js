const con = require("../../dbConnection.js");

// Creates a new user
function createUser(
  firstName,
  lastName,
  address,
  email,
  password,
  category,
  project
) {
  return new Promise(function (resolve) {
    con.query(
      "INSERT INTO  users (firstName, lastName, address, email, password, category, projects_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [firstName, lastName, address, email, password, category, project],
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

function updateUserInfo(
  firstName,
  lastName,
  email,
  address,
  category,
  projects_id
) {
  return new Promise(function (resolve) {
    con.query(
      "UPDATE users SET firstName = ?, lastName = ?, address = ?, category = ?, projects_id =? WHERE email = ?",
      [firstName, lastName, address, category, projects_id, email],
      function (err) {
        if (err) throw err;
        resolve();
      }
    );
  });
}

function updateUserPassword(email, password) {
  return new Promise(function (resolve) {
    con.query(
      "UPDATE users SET password = ? WHERE email = ?",
      [password, email],
      function (err) {
        if (err) throw err;
        resolve();
      }
    );
  });
}

module.exports = {
  createUser,
  getInfoByEmail,
  getAllUsers,
  updateUserInfo,
  updateUserPassword,
};
