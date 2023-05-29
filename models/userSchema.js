const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      default: 'user',
    },
    score: {
      type: Number,
      defaultValue: 0,
      trim: true,
    },
  },
  { timestamps: true }
);

// userSchema.methods.generateAuthToken = async function () {
//   try {
//     let token = await jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
//     this.token = this.token;
//     await this.save();
//     return token;
//   } catch (error) {
//     console.log(error);
//   }
// };

const User = mongoose.model('User', userSchema);
module.exports = User;
