const User = require("../models/user");
const Gig = require("../models/gig");
const Orders = require("../models/orders");

exports.getDashboard = async (req, res, next) => {
  try {
    const gig = await Gig.find({ freelancerEmail: req.session.user.email });
    const fgigs = gig.map((orr) => orr);
    console.log(fgigs);

    const salesPromises = fgigs.map((fgig) => {
      return Orders.find({ gigId: fgig._id });
    });

    const salesResults = await Promise.all(salesPromises);

    const sales = [];
    const sale_gig = [];

    salesResults.forEach((saleList) => {
      saleList.forEach((s) => {
        sales.push(s);
      });
    });

    for (const sale of sales) {
      const gig = await Gig.findOne({ _id: sale.gigId });
      sale_gig.push(gig);
    }

    const orders = await Orders.find({ userEmail: req.session.user.email });

    const gigPromises = orders.map((order) => {
      return Gig.findOne({ _id: order.gigId });
    });

    const gigs = await Promise.all(gigPromises);

    res.render("pages/dashboard", {
      user: req.session.user,
      orders,
      gigs,
      fgigs,
      sales,
      sale_gig,
    });
  } catch (error) {
    console.log("Dashboard ERR");
    console.log(error);
  }
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
