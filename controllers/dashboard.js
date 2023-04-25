const User = require("../models/user");
const Gig = require("../models/gig");
const Orders = require("../models/orders");

exports.getDashboard = async (req, res, next) => {
  try {
    const fgigs = await Gig.find({ freelancerEmail: req.session.user.email });
    const sales = [];
    const sale_gig = [];

    for (let i = 0; i < fgigs.length; i++) {
      const sale = await Orders.find({ gigId: fgigs[i]._id });
      sales.push(...sale);
      for (let j = 0; j < sale.length; j++) {
        const gig = await Gig.findOne({ _id: sale[j].gigId });
        sale_gig.push(gig);
      }
    }

    const orders = await Orders.find({ userEmail: req.session.user.email });
    const gigs = await Gig.find({ _id: { $in: orders.map((o) => o.gigId) } });

    res.render("pages/dashboard", {
      user: req.session.user,
      orders,
      gigs,
      fgigs,
      sales,
      sale_gig,
    });
  } catch (err) {
    next(err);
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
