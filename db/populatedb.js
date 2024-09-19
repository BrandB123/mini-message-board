#! /usr/bin/env node

require('dotenv').config()
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR (30),
  message VARCHAR ( 360 ),
  timestamp TIMESTAMP
);

INSERT INTO messages (name, message, timestamp) 
VALUES ('Brandon', 'Go to the "New Message" tab to add a message!', null);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
