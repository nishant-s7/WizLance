const express = require("express");

const router = express.Router();


router.get("/", (req, res, next) => {
  loggedIn = false;
  res.render("pages/landing_nol.ejs");
});

router.get("/mainpage", (req, res, next) => {
  if (loggedIn) {
    res.render("pages/mainpage");
  } else {
    res.redirect("login");
  }
});

router.get("/dashboard", (req, res, next) => {
  if(loggedIn) res.render("pages/dashboard");
  else res.redirect("login");
});

module.exports = router;
