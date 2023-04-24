const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gigSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  freelancerEmail: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  imageUrl: String,
  description: String,
});

module.exports = mongoose.model("Gig", gigSchema);
