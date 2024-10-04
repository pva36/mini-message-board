#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS "users" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "username" VARCHAR (255) UNIQUE
);

INSERT INTO "users" (username)
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');

CREATE TABLE IF NOT EXISTS "messages" (
  "id" INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "message" VARCHAR (255),
  "date" TIMESTAMPTZ,
  "user_id" INTEGER REFERENCES "users"(id)
);

INSERT INTO "messages" (message, date, user_id)
VALUES
  ('Hello!', NOW(), (SELECT "id" FROM "users" WHERE "username" = 'Bryan')),
  ('Hi!', NOW(), (SELECT "id" FROM "users" WHERE "username" = 'Odin')),
  ('Bye!', NOW(), (SELECT "id" FROM "users" WHERE "username" = 'Damon'));
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      `postgresql://${process.env.DB_USER}:` +
      `${process.env.DB_PASS}@${process.env.DB_HOST}:` +
      `${process.env.DB_PORT}/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
