import { db } from "./server.js";

db.query(`CREATE TABLE IF NOT EXISTS userComments (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(64),
    comment VARCHAR(255)
    )`);

db.query(
  `INSERT INTO userComments (user_name, comment) VALUES ('Sam', 'Top class hotel')`
);

db.query(
  `INSERT INTO userComments (user_name, comment) VALUES ('Lisa', 'What a rubbish hotel!')`
);
