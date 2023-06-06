const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "docker/.env") });

const express = require("express");
const auth = require("./routes/access/auth");

// Routes
const loginPOST = require("./routes/access/loginPOST");
const signupPOST = require("./routes/access/signupPOST");
const logoutPOST = require("./routes/access/logoutGET");
const getAllUsersPOST = require("./routes/getAllUsersPOST");
const getUserPOST = require("./routes/getUserPOST");
const updateUserInfoPOST = require("./routes/updateUserInfoPOST");

const accessRouter = require("./routes/access/access");
const indexRouter = require("./routes/index");

const app = express();
const port = process.env.PORT || 8000;

// livereload
if (app.get("env") === "development") {
  const livereload = require("livereload");

  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(
    path.join(__dirname, "views"),
    path.join(__dirname, "frontend/src")
  );
  const connectLivereload = require("connect-livereload");
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

  app.use(connectLivereload());
}

// Express settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Pages without Authorization
app.use(accessRouter);
app.use(loginPOST);

// Need token
app.use(auth);
app.use(signupPOST);
app.use(indexRouter);
app.use(logoutPOST);
app.use(getAllUsersPOST);
app.use(getUserPOST);
app.use(updateUserInfoPOST);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
