const express = require('express');
const app = express();
const logger = require('morgan');
const userRoutes = require('./routes/userRoute');
const port = process.env.PORT || '3000';

require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
