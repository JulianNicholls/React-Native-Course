const express = require('express');
const mongoose = require('mongoose');

require('./models/User');
const authRouter = require('./routes/auth');
const requireAuth = require('./middleware/requireAuth');

const app = express();

app.use(express.json());
app.use(authRouter);

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

app.get('/', requireAuth, (req, res) => {
  res.send(`Track-Server Root: ${req.user.email}\n`);
});

app.listen(port, () => {
  console.log(`Track-Server listening on port ${port}`);
});
