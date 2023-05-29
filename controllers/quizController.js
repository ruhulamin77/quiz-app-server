const Quiz = require('../models/quizSchema');

exports.addQuiz = async (req, res, next) => {
  try {
    const quiz = new Quiz({
      questions: [
        {
          title: 'Hello title',
          options: [{ title: 'yes' }, { title: 'no' }, { title: 'very good' }],
        },
      ],
    });

    const result = await quiz.save();
    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const quiz = await Quiz.find({});
    res.json(quiz[0].questions);
  } catch (error) {
    console.log(error.message);
  }
};

// update the quiz
exports.addQuiz = async (req, res, next) => {
  console.log(req.body);
  const { title, option1, option2, option3, option4, option5 } = req.body;
  try {
    const quiz = await Quiz.updateOne(
      { _id: '6474a1155249043b3c84970b' },
      {
        $push: {
          questions: {
            title: title,
            options: [
              { title: option1 },
              { title: option2 },
              { title: option3 },
              { title: option4 },
              { title: option4 },
              { title: option5 },
            ],
          },
        },
      },
      { upsert: true }
    );
    res.json(quiz);
  } catch (error) {
    console.log(error.message);
  }
};

// db.myCollection.update(
//   { _id: ObjectId('60a458d2a1b72c4914c5228f') },
//   { $push: { nestedArray: { nestedId: 3, nestedName: 'Object 3' } } }
// );
