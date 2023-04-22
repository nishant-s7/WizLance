const express = require("express");

const Categories = require("../models/category")

const router = express.Router();
var freelancer = false;
router.get("/", (req, res, next) => {
  res.render("pages/landing_nol.ejs");
});

router.get("/mainpage", (req, res, next) => {
  if (req.session.isLoggedIn === true) {
  Categories.find({}).then((categories) => {
    res.render("pages/mainpage", {categories});
  })
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
