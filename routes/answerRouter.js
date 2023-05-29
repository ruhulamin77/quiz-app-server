const express = require('express');
const answerController = require('../controllers/answerController');
const answerRouter = express.Router();

answerRouter.get('/getAll', answerController.getAll);
answerRouter.put('/add-answer', answerController.addAnswer);

module.exports = answerRouter;
