const express = require("express");

const router = express.Router();

let freelancer = false;

router.get("/:mainpage/graphics-design", (req, res) => {
  res.render("pages/graphics-design");
});

router.get("/:mainpage/music-audio", (req, res) => {
  res.render("pages/music-audio");
});

router.get("/:mainpage/programming-tech", (req, res) => {
  res.render("pages/programming-tech");
});

router.get("/:mainpage/photography", (req, res) => {
  res.render("pages/photography");
});

router.get("/:mainpage/animation", (req, res) => {
  res.render("pages/animation");
});

router.get("/:mainpage/writing-translation", (req, res) => {
  res.render("pages/writing-translation");
});

router.get("/:mainpage/:pages/:categories", (req, res) => {
  console.log(req.params.pages);
  console.log(req.params.categories);
  console.log(req.params.mainpage);
  let mainparameters = req.params.pages;
  let parameters = req.params.categories;
  let mainpage = req.params.mainpage;
  res.render("pages/result-template", {
    parameters,
    mainparameters,
    mainpage,
  });
});

router.get("/:x/:pages/:categories/:profilePages", (req, res) => {
  res.render("pages/profile-templates");
});

router.get("/contact", (req, res) => {
  res.render("pages/contact-us");
});

router.get("/dashboard22", (req, res) => {
  res.render("pages/dashboard22", { freelancer });
});

module.exports = router;
