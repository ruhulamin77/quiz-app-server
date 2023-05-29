const Result = require('../models/resultSchema');

exports.addResult = async (req, res, next) => {
  try {
    // const result = new Result(req.body);
    // const savedResult = await result.save();
    // res.json(savedResult);
    const id = req.params.id;
    const result = await Result.updateOne({ _id: id }, req.body);
    res.json(result);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const result = await Result.find({});
    res.json(result[0].questions);
  } catch (error) {
    console.log(error.message);
  }
};
