const User = require("../models/user");
const Category = require("../models/category");
const Gig = require("../models/gig");
const Messages = require("../models/messages");

const nodemailer = require("nodemailer");

exports.displayUsers = (req, res) => {
    User.find({}, {password: 0}).then(
        (users) => {
            return res.render('pages/display-details', {users});
        }
    );
};

exports.displayCategories = (req, res) => {
    Category.find({}).then(
        (categories) => {
            return res.render('pages/display-categories', {categories})
        }
    );
};

exports.displayGigs = (req, res) => {
    Gig.find({}).then(
        (gigs) => {
            return res.render('pages/display-gigs', {gigs})
        }
    );
};

exports.deleteFromUser = (req, res) => {
    const requiredMail = req.body.deleteFromEmail;
    User.findOneAndRemove({email: requiredMail}).then(
        (user) => {
            if(user.isFreelancer){
                Gig.deleteMany({freelancerEmail: user.email}).then();
            }
            return res.redirect('/admin-users');
        }
    );
};

exports.addCategory = (req, res) => {
    const newCategory = req.body.addCategory;
    const image = req.body.addCategoryImage;
    const catObj = new Category({
        name: newCategory,
        imageUrl: image
    });
    catObj.save();
    
    setTimeout( () => { return res.redirect('/admin-categories');}, 50);
};

exports.addSubCategory = (req, res) => {
    const requiredCategory = req.body.selectCategory;
    const image = req.body.addSubCategoryImage;

    const newSubCategory = {
        name: req.body.addSubCategory,
        imageUrl: image
    }

    Category.findOneAndUpdate(
        { name: requiredCategory.toString()},{ $push: { subCategories: newSubCategory } }
      )
        .then(() => {
          return res.redirect('/admin-categories');
        })
};

exports.deleteCategory = (req, res) => {
    const categoryChosen = req.body.selectedCategory;

    Category.deleteOne({name: categoryChosen}).then(() => {
        return res.redirect('/admin-categories');
    });

};

exports.deleteSubCategory = (req, res) => {
    const categoryChosen = req.body.selectedCategory;
    const subCategoryChosen = req.body.deleteSubCategory;

    Category.findOneAndUpdate(
        {name: categoryChosen.toString()}, {$pull: {subCategories: {name:subCategoryChosen}}}).then(()=>{
            return res.redirect('/admin-categories')
        });
};

exports.displayMessages = (req, res) => {
    Messages.find({}).then(
        (messages) => {
            return res.render('pages/display-messages', {messages})
        }
    );
};

exports.contactAdmin = (req, res) => {
    const nameReq = req.body.name;
    const emailReq = req.body.email;
    const messageSent = req.body.message;

    const newMessage = new Messages(
        {
            name: nameReq,
            email: emailReq,
            message: messageSent
        }
    );

    newMessage.save();
    return res.redirect('/contact');
};

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "wiz.project13@gmail.com",
      pass: "cxtdpaqbbnacvtft",
    },
  });
  
  exports.getDashboard = (req, res, next) => {
    res.render("pages/admin-dashboard", { admin: req.session.user });
  };

  exports.postMail = (req, res, next) => {
    const subject = req.body.mailSubject;
    const message = req.body.mailMessage;
    User.find({}, { email: 1 })
      .then((emails) => {
        res.redirect("/admin-dashboard");
        return emails.forEach((email) => {
          transport.sendMail({
            to: email,
            from: "wiz.project13@gmail.com",
            subject: subject,
            html: message,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  exports.getMailPage = (req, res, next) => {
    res.render("pages/admin-sendMail");
  };