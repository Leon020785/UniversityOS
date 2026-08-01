// Import PostgreSQL pool fra 'pg' library
const { Pool } = require('pg');

// Load miljøvariabler fra .env fil
require('dotenv').config();

// Opret en connection pool til databasen
// Den bruger DATABASE_URL fra .env fil
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Hvis der opstår fejl på connection, log det
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

// Exporter pool så andre filer kan bruge den
module.exports = pool;