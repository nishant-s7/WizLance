const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  imageUrl: String,
  gigs: [
    {
      gig_id: Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model(
  "SubCategory",
  subCategorySchema,
  "sub_categories"
);
