const express = require('express');

const router = express.Router()

// let loggedIn = false;


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

router.get("/:pages/:categories", (req, res) => {
  console.log(req.params.pages);
  console.log( req.params.categories);
  let mainparameters = req.params.pages
 let parameters = req.params.categories;
  res.render("pages/result-template", { loggedIn , parameters , mainparameters});
});

router.get("/:pages/:categories/:profilePages", (req, res) => {
 
  if (loggedIn) res.render("pages/profile-templates", );
  else res.redirect("login");
});

module.exports = router