const express = require('express');
const catalogRouter = require('./routes/catalog');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoDB =
  'mongodb+srv://admin:jelkokelkojelkomerlin@cluster0.3c7sisj.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(cors());
app.use('/', catalogRouter);

app.listen(2000, function () {
  console.log('Server started successfully');
});
module.exports = app;
