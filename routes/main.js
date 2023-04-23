const express = require("express");

const Categories = require("../models/category");
const Gig = require("../models/gig");

const router = express.Router();
var freelancer = false;
router.get("/", (req, res, next) => {
  res.render("pages/landing_nol.ejs");
});

router.get("/mainpage", (req, res, next) => {
  if (req.session.isLoggedIn === true) {
    Categories.find({}).then((categories) => {
      res.render("pages/mainpage", { categories });
    });
  } else {
    res.redirect("login");
  }
});

router.get("/dashboard", (req, res, next) => {
  res.render("pages/dashboard", { freelancer });
});

router.get("/seller-overview", (req, res, next) => {
  res.render("pages/seller-form");
});

router.post("/signupFreelancer", (req, res, next) => {
  freelancer = true;
  res.redirect("/dashboard");
});

router.post("/search", (req, res, next) => {
  const gigName = req.body.gigName;
  Gig.find({ subCategory })
    .then((gigs) => {})
    .catch((err) => {
      console.log(err);
    });
});

// router.post("/add", (req, res, next) => {
//   const name = "Shooting Stars";
//   const imageUrl = "https://dummyimage.com/421x261";
//   const price = 19.99;
//   const subCategory = "Logo Design";
//   const description = "Hello there, I am an experienced logo designer.";

//   const gig = new Gig({
//     name,
//     imageUrl,
//     price,
//     description,
//     subCategory,
//   });

//   gig.save().then(() => {
//     console.log("Saved");
//     res.redirect("/mainpage");
//   });
//   // const subCategories = [
//   //   {
//   //     name: "Voice Over",
//   //     imageUrl:
//   //       "https://i.pinimg.com/736x/7d/d9/c2/7dd9c2ded4abab02c41b261d6b06f3ba.jpg",
//   //   },
//   // ];

//   // const category = new Categories({
//   //   name,
//   //   imageUrl,
//   //   subCategories,
//   // });

//   // category.save().then(() => {
//   //   console.log("Saved");
//   //   res.redirect("/mainpage");
//   // });
// });

module.exports = router;
