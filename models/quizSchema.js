const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema(
  {
    questions: [
      {
        title: String,
        options: [
          {
            title: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
