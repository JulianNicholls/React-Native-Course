const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3001;

const mongoUri = 'mongodb://localhost/track';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to local Mongo');
});

mongoose.connection.on('error', err => {
  console.error('Error connecting to local Mongo:', err);
});

app.get('/', (req, res) => {
  res.send('Track-Server Root\n');
});

app.listen(port, () => {
  console.log(`Track-Server listening on port ${port}`);
});
