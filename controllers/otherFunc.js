const Categories = require("../models/category");

exports.postSearchCategories = (req, res, next) => {
  const query = req.body.query;
  const regex = new RegExp(query, "i");
  Categories.findOne({ name: regex })
    .then((category) => {
      res.redirect(`/mainpage/${category.name}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postSearchSubCategories = (req, res, next) => {
  const category = req.params.category;
  const query = req.body.query;
  const regex = new RegExp(query, "i");
  Categories.findOne({ name: category })
    .then((category) => {
      const subCategory = category.subCategories.find((sc) =>
        regex.test(sc.name)
      );
      if (!subCategory) {
        res.redirect(`/mainpage/${category.name}`);
      }
      res.redirect(`/${category.name}/${subCategory.name}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getContactForm = (req, res, next) => {
  res.render("pages/contact-us");
};
