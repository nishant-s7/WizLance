const User = require("../models/user");
const Category = require("../models/category");

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