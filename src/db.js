const { Pool } = require('pg');

module.exports = new Pool({
  connectionString:
    process.env.DATABASE_URL || 'postgres://test:test@127.0.0.1:5432/testdb',
});