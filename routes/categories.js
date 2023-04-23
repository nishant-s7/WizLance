const express = require("express");

const Categories = require("../models/category");
const Gig = require("../models/gig");

const router = express.Router();

router.get("/mainpage/:category", (req, res) => {
  const category = req.params.category;
  console.log(category);

  Categories.findOne({ name: category }).then((category) => {
    res.render("pages/graphics-design", { category });
  });
});

router.get("/:pages/:categories", (req, res) => {
  const category = req.params.pages;
  const subCategory = req.params.categories;

  Gig.find({ subCategory })
    .then((gigs) => {
      res.render("pages/result-template", {
        category,
        subCategory,
        gigs,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:pages/:categories/:gig", (req, res) => {
  res.render("pages/profile-templates");
});

// router.get("/payment", (req, res) => {
//   res.render("pages/Payment");
// });

router.get("/contact", (req, res) => {
  res.render("pages/contact-us");
});

module.exports = router;
