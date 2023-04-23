const express = require("express");

const Categories = require("../models/category")

const router = express.Router();

router.get("/:category", (req, res) => {
  const category = req.params.category;
  console.log(category);
  
  Categories.findOne({name: category}).then((category) => {
    res.render("pages/graphics-design",{category});
  })
});

// router.get("/mainpage", (req, res, next) => {
//   if (req.session.isLoggedIn === true) {
//   Categories.find({}).then((categories) => {
//     res.render("pages/mainpage", {categories});
//   })
//   } else {
//     res.redirect("login");
//   }
// });
// router.get("/music-audio", (req, res) => {
//   res.render("pages/music-audio");
// });

// router.get("/programming-tech", (req, res) => {
//   res.render("pages/programming-tech");
// });

// router.get("/photography", (req, res) => {
//   res.render("pages/photography");
// });

// router.get("/animation", (req, res) => {
//   res.render("pages/animation");
// });

// router.get("/writing-translation", (req, res) => {
//   res.render("pages/writing-translation");
// });

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
