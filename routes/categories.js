const express = require('express');

const router = express.Router()

router.get("/graphics-design", (req, res) => {
  res.render("pages/graphics-design", { loggedIn });
});

router.get("/music-audio", (req, res) => {
  res.render("pages/music-audio", { loggedIn });
});

router.get("/programming-tech", (req, res) => {
  res.render("pages/programming-tech", { loggedIn });
});

router.get("/photography", (req, res) => {
  res.render("pages/photography", { loggedIn });
});

router.get("/animation", (req, res) => {
  res.render("pages/animation", { loggedIn });
});

router.get("/writing-translation", (req, res) => {
  res.render("pages/writing-translation", { loggedIn });
});

router.get("/logo-design", (req, res) => {
  res.render("pages/logo-design", { loggedIn });
});

router.get("/logo-design/profile-templates", (req, res) => {
  if (loggedIn) res.render("pages/profile-templates");
  else res.redirect("login");
});

module.exports = router