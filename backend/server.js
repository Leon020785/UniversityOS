const express = require('express');
// Hent Express

const db = require('./db');
// Hent database forbindelsen

require('dotenv').config();
// Læs .env fil

const app = express();
// Lav ny app

app.use(express.json());
// App kan læse JSON

app.get('/', (req, res) => {
// Når nogen besøger root (/)
  res.send('Backend virker! 🚀');
// Send besked tilbage
});

app.get('/api/courses', (req, res) => {
// Når nogen spørger /api/courses
  db.query('SELECT * FROM courses', (err, result) => {
  // Spørg database efter alle courses
    if (err) {
      res.status(500).json({ error: 'Database fejl' });
    // Hvis fejl: send fejlbesked
    } else {
      res.json(result.rows);
    // Hvis success: send kurserne
    }
  });
});

app.listen(process.env.PORT, () => {
// Start serveren
  console.log(`Server kører på port ${process.env.PORT}`);
});