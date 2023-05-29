const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

exports.registerUserService = async (data) => {
  const user = new User({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: await bcrypt.hash(data.password, 10),
    score: 0,
  });
  const result = await user.save();
  return result;
};

exports.loginUserService = async (data) => {
  const { email, password } = data;
  const user = await User.findOne({ email });
  return user;
};
