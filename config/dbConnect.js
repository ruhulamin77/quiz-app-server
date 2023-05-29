const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.DB_URI;

const dbConnect = async () => {
  await mongoose.connect(URI);
  console.log('DB connection established');
};

module.exports = dbConnect;
