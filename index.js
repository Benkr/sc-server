/* eslint-disable no-console */
const express = require('express');
const slugRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(slugRouter);

app.listen(3400, () => {
  console.log('Started!');
});
