const User = require("../models/user");
const Category = require("../models/category");
const Gig = require("../models/gig");
const session = require("express-session");

exports.addGigs = (req, res) => {
  const gig = req.body.GigName;
  const category = req.body.Category;
  const subCategory = req.body.subCategory;
  const description = req.body.description;
  const price = req.body.price;
  const img = req.file;
  const imageUrl = img.path;

  console.log(gig);
  console.log(category);
  console.log(subCategory);
  console.log(description);
  console.log(price);
  console.log(imageUrl);

  console.log(req.session.user.email);

  const gigdata = new Gig({
    name: gig,
    price: price,
    freelancerEmail: req.session.user.email,
    imageUrl,
    description: description,
    category: category,
    subCategory: subCategory,
  });

  gigdata.save();
  freelancer = true;

  return res.redirect("/dashboard");
};
