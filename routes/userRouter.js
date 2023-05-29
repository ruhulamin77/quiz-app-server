const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/register', userController.registerUser);
userRouter.post('/login', userController.loginUser);
userRouter.put('/score/:email', userController.updateScore);
userRouter.get('/getAllUser', userController.getAllUser);

module.exports = userRouter;
