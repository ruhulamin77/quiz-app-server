// http://localhost/5000/api/result/${email}

const express = require('express');
const resultController = require('../controllers/resultController');

const resultRouter = express.Router();

resultRouter.put('/:id', resultController.addResult);
resultRouter.get('/getAll', resultController.getAll);

module.exports = resultRouter;
