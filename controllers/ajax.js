const Category = require("../models/category");

exports.searchCategories = async (req, res, next) => {
  const query = req.query.query;
  const categories = await Category.find({
    name: { $regex: query, $options: "i" },
  });
  res.status(200).json({
    categories,
  });
};
