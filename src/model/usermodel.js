const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required:true,
      minlength:[2, 'name must be langer than 2']
    },
    password: {
      type: String,
      required: true,
     set:(password)=>bcrypt.hashSync(password,8),
      validate: [
        function (password) {
          return password.length > 3;
        },
        (message = "hata"),
      ],
    },
    email: {
      type: String,
      required: [true, "biite Email schreiben"],
      validate: [
        (email) => email.includes("@") && email.includes("."),
        "email kein @ .",
      ],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
