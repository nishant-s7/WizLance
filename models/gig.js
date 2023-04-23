const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gigSchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: String,
  description: String,
  subCategory: String
});

module.exports = mongoose.model("Gig", gigSchema);
