const User = require("../models/user");
const Gig = require("../models/gig");
const Orders = require("../models/orders");

exports.getDashboard = (req, res, next) => {
  let gigs = [];
  let fgigs = [];
  let sales = [];
  let sale_gig = [];
  let ords = [];

  Gig.find({ freelancerEmail: req.session.user.email })
    .then((gig) => {
      return (fgigs = gig.map((orr) => orr));
    })
    .then(() => {
      for (i = 0; i < fgigs.length; i++) {
        Orders.find({ gigId: fgigs[i]._id }).then((sale) => {
          sale.forEach((s) => {
            sales.push(s);
          });

          sale.forEach((i) => {
            Gig.findOne({ _id: i.gigId }).then((gig) => {
              sale_gig.push(gig);
            });
          });
        });
      }
    })
    .then(() => {
      Orders.find({ userEmail: req.session.user.email }).then((orders) => {
        ords = orders;
        orders.forEach((order) => {
          Gig.findOne({ _id: order.gigId }).then((gig) => {
            gigs.push(gig);
          });
        });
      });
    })
    .then(() => {
      res.render("pages/dashboard", {
        user: req.session.user,
        orders: ords,
        gigs,
        fgigs,
        sales,
        sale_gig,
      });
    });
};

exports.getSellerForm = (req, res, next) => {
  res.render("pages/freelancer-form");
};

exports.postSignupFreelancer = (req, res, next) => {
  const skills = req.body.skills;
  const arr = skills.split(",");
  req.session.user.isFreelancer = true;
  req.session.user.freelancerSkills = arr;
  req.session.save();

  User.findOne({ email: req.session.user.email })
    .then((user) => {
      user.isFreelancer = true;
      user.freelancerSkills = arr;
      user.save().then(() => {
        res.redirect("/dashboard");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
