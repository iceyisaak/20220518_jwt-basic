require('dotenv').config();
require('express-async-errors');

const express = require('express');

const app = express();

const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middlewares/not-found');
const errorHandlerMiddleware = require('./middlewares/error-handler');

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/', mainRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    app.listen(port, console.log(`Server is running on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

startServer();