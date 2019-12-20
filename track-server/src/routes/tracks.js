const express = require('express');
const mongoose = require('mongoose');

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();
const Track = mongoose.model('Track');

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
  try {
    const tracks = await Track.find({ userId: req.user.id });

    res.send(tracks);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

router.post('/tracks', async (req, res) => {
  const { name, locations } = req.body;

  if (!name || !locations)
    return res.status(422).send('You must provide a name and a list of locations');

  try {
    const track = new Track({ userId: req.user.id, name, locations });

    await track.save();

    res.send(track);
  } catch (err) {
    console.error(err);
    res.status(422).send('An error occurred: ' + err.message);
  }
});

module.exports = router;
