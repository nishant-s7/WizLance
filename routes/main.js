const express = require("express");

const router = express.Router();
var freelancer = false;
router.get("/", (req, res, next) => {
  loggedIn = false;
  res.render("pages/landing_nol.ejs");
});

router.get("/mainpage", (req, res, next) => {
  if (loggedIn === true) {
    res.render("pages/mainpage");
  } else {
    res.redirect("login");
  }
});

router.get("/dashboard", (req, res, next) => {
  console.log(freelancer);
  res.render("pages/dashboard", { freelancer });
});

router.get("/seller-overview", (req, res, next) => {
  res.render("pages/seller-form");
});

router.post("/signupFreelancer", (req, res, next) => {
  freelancer = true;
  res.redirect("/dashboard");
});

module.exports = router;
