const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phonenumber: {
    type: Number,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  }
});


// now we will create a collections

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;