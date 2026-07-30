const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend virker! 🚀');
});

app.listen(5000, () => {
  console.log('Server kører på port 5000');
});