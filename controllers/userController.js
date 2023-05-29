const User = require('../models/userSchema');
const userService = require('../services/userService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(422).json({ error: 'User already exists' });
    }
    const password = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: password,
      score: 0,
    });

    const result = await user.save();
    res.status(200).json({
      status: 'success',
      message: 'User saved successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ status: 'fail', error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });

    const isMatched = await bcrypt.compare(req.body.password, user.password);

    // let token = await jwt.sign({ _id: this._id }, process.env.JWT_SECRET);

    if (isMatched) {
      const expIn = Date.now() + 60 * 60 * 1000;
      const token = jwt.sign(
        {
          tokenId: user._id,
          email: user.email,
          expIn: expIn,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.status(200).json({
        status: 'success',
        message: 'User found',
        data: user,
        token: token,
      });
    } else {
      res.status(400).send({
        status: 'fail',
        message: 'User not found',
      });
    }
  } catch (error) {
    res.status(404).json({ status: 'fail', error: error.message });
  }
};

// get all users
exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).sort([['score', -1]]);

    if (users) {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(404).json({ status: 'fail', error: error.message });
  }
};

// update user score
exports.updateScore = async (req, res) => {
  try {
    const email = req.params.email;
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: { score: req.body.score } }
    );
    res.status(200).json({
      status: 'success',
      message: 'Users score was updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    res.status(404).json({ status: 'fail', error: error.message });
  }
};
