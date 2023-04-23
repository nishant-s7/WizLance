const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userEmail: {
        type: String,
        required: true,
    }, 
    gigId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Gig"
    },
    projectRequest: String
});

module.exports = mongoose.model("Orders", orderSchema);