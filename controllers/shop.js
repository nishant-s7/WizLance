const Categories = require("../models/category");
const Gig = require("../models/gig");
const User = require("../models/user");
const Orders = require("../models/orders");

exports.getLandingPage = (req, res, next) => {
  res.render("pages/landing_nol.ejs");
};

exports.getMainPage = (req, res, next) => {
  if (req.session.isLoggedIn === true) {
    Categories.find({}).then((categories) => {
      res.render("pages/mainpage", { categories, user: req.session.user });
    });
  } else {
    res.redirect("login");
  }
};

exports.getCategories = (req, res, next) => {
  const category = req.params.category;
  console.log(category);

  Categories.findOne({ name: category }).then((category) => {
    res.render("pages/graphics-design", { category });
  });
};

exports.getSubCategories = (req, res, next) => {
  const category = req.params.pages;
  const subCategory = req.params.categories;
  Gig.find({ subCategory })
    .then((gigs) => {
      console.log(gigs);
      res.render("pages/result-template", {
        category,
        subCategory,
        gigs,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getGigs = (req, res, next) => {
  const category = req.params.pages;
  const subCategory = req.params.categories;
  const gig = req.params.gig;

  Gig.findOne({ name: gig })
    .then((gig) => {
      console.log(gig);
      const freelancerEmail = gig.freelancerEmail;
      const userIsFreelancer = req.session.user.email === freelancerEmail;
      User.findOne({ isFreelancer: true, email: freelancerEmail }).then(
        (freelancer) => {
          res.render("pages/profile-templates", {
            gig,
            freelancer,
            category,
            subCategory,
            userIsFreelancer,
          });
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getPayment = (req, res, next) => {
  const gigName = req.params.gig;
  res.render("pages/Payment", { gigName });
};

exports.orderplaced = (req, res) => {
  const findGig = req.body.gigs;
  const projectRequirements = req.body.projectRequest;

  Gig.findOne({ name: findGig })
    .then((OrderGig) => {
      const orderSaved = new Orders({
        userEmail: req.session.user.email,
        gigId: OrderGig._id,
        projectRequest: projectRequirements,
      });

      orderSaved.save();
      res.redirect("/mainpage");
    })
    .catch((err) => {
      console.log(err);
    });
};
