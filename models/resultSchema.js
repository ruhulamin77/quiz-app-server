const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    questions: [
      {
        title: String,
        options: [
          {
            title: String,
            checked: Boolean,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Result = mongoose.model('Result', resultSchema);
module.exports = Result;
