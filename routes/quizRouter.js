const express = require('express');
const quizController = require('../controllers/quizController');
const userRouter = express.Router();

userRouter.post('/addQuiz', quizController.addQuiz);
userRouter.get('/getAll', quizController.getAll);
userRouter.put('/add-quiz', quizController.addQuiz);

module.exports = userRouter;
