const express = require('express');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const User = require('./models/Users');
const userRoutes = require('./routes/userRoute');
const port = process.env.PORT || '3000';

require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => console.log(`Mongo Error: ${err}`));

app.use(logger('dev'));

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
