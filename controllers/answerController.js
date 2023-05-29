const Answer = require('../models/answerSchema');

exports.getAll = async (req, res, next) => {
  try {
    const answer = await Answer.find({});
    res.json(answer[0].questions);
  } catch (error) {
    console.log(error.message);
  }
};

exports.addAnswer = async (req, res, next) => {
  const [title, option1, option2, option3, option4] = req.body;
  try {
    const answer = await Answer.updateOne(
      { _id: '6474a11c5249043b3c84970d' },
      {
        $push: {
          questions: {
            title: title,
            options: [{ title: option1, correct: true }],
          },
        },
      }
    );
    res.send(answer);
  } catch (error) {
    console.log(error.message);
  }
};
