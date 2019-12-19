const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = mongoose.model('User');

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!email || password.length < 6) {
    return res.status(422).send('Email address and password must be valid');
  }

  try {
    const user = new User({ email, password });

    await user.save();

    const token = jwt.sign(
      { userId: user._id },
      'MYSUPERLONGSECRETKEYISTHISSTRING'
    );
    res.send({ token });
  } catch (err) {
    return res.status(422).send(`Could not create user: ${err}`);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(401).send('Invalid email address or password');

  const user = await User.findOne({ email });

  if (!user) return res.status(401).send('Invalid email address or password');

  try {
    await user.comparePassword(password);

    const token = jwt.sign(
      { userId: user._id },
      'MYSUPERLONGSECRETKEYISTHISSTRING'
    );
    res.send({ token });
  } catch (err) {
    return res.status(401).send('Invalid email address or password');
  }
});

module.exports = router;
