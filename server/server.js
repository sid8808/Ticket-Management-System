const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
//const cookieSession = require("cookie-session");
require("./passport");
const app = express();

// app.use(
//   cookieSession({
//     name: "google-auth-session",
//     keys: ["key1", "key2"],
//   })
// );
app.use(passport.initialize());
// app.use(passport.session());

var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const { getJwtToken } = require("./config/jwt.config");

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Traffic Support System" });
});

// for google auth
app.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
    successRedirect: "/google/callback/success",
    failureRedirect: "/google/callback/failure",
  })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
  }),
  (req, res) => {
    console.log(req.user);
    const userToken = getJwtToken(req.user);
    return res.redirect("http://localhost:4200?access_token=" + userToken);
  }
);

app.get("/google/callback/success", (req, res) => {
  // if (!req.user) res.redirect("/google/callback/failure");
  // console.log(req.user);
  // res.send("Welcome " + req.user.email);
  res.render();
});

app.get("/google/callback/failure", (req, res) => {
  res.send("Error");
});
//

require("./routes/ticket.routes")(app);
require("./routes/user.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
