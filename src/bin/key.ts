import * as pg from 'pg';

const conn = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5432
});

export default conn;