const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const userRouter = require('./routes/userRouter');
const quizRouter = require('./routes/quizRouter');
const resultRouter = require('./routes/resultRouter');
const answerRouter = require('./routes/answerRouter');
const app = express();
dotenv.config();

// post
const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/users', userRouter);
app.use('/api/quiz', quizRouter);
app.use('/api/result', resultRouter);
app.use('/api/answers', answerRouter);

app.get('/', (req, res) => {
  res.send('Welcome');
});

// listeners
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  dbConnect();
});
