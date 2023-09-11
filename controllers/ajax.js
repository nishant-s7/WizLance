const Category = require("../models/category");
const User = require("../models/user");

exports.searchCategories = async (req, res, next) => {
  const query = req.query.query;
  const categories = await Category.find({
    name: { $regex: query, $options: "i" },
  });
  res.status(200).json({
    categories,
  });
};

exports.searchUsers = async (req, res, next) => {
  const query = req.query.query;
  const users = await User.find({
    firstName: { $regex: query, $options: "i" },
  });
  res.status(200).json({
    users,
  });
};
