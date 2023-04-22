const express = require("express");

const router = express.Router();

router.get("/graphics-design", (req, res) => {
  res.render("pages/graphics-design");
});

router.get("/music-audio", (req, res) => {
  res.render("pages/music-audio");
});

router.get("/programming-tech", (req, res) => {
  res.render("pages/programming-tech");
});

router.get("/photography", (req, res) => {
  res.render("pages/photography");
});

router.get("/animation", (req, res) => {
  res.render("pages/animation");
});

router.get("/writing-translation", (req, res) => {
  res.render("pages/writing-translation");
});

router.get("/:pages/:categories", (req, res) => {
  const page = req.params.pages;
  const category = req.params.categories;
  res.render("pages/result-template", {
    page,
    category,
  });
});

router.get("/:pages/:categories/profile-templates", (req, res) => {
  res.render("pages/profile-templates");
});

router.get("/contact", (req, res) => {
  res.render("pages/contact-us");
});

module.exports = router;
