const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: String,
  subCategories: [
    {
      name: String,
      imageUrl: String,
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema, "categories");
