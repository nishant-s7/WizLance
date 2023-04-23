const User = require("../models/user");
const Category = require("../models/category");
const Gig = require("../models/gig");

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
    User.deleteOne({email: requiredMail}).then(
        () => {
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
