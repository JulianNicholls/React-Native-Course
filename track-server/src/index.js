const express = require('express');

const app = express();

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Track-Server Root\n');
});

app.listen(port, () => {
  console.log(`Track-Server listening on port ${port}`);
});
