const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema(
  {
    questions: [
      {
        title: String,
        options: [
          {
            title: String,
            correct: Boolean,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Answer = mongoose.model('Answer', answerSchema);
module.exports = Answer;
