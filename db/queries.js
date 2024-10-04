const pool = require("./pool");

async function getAllMessagesWithUsernames() {
  const { rows } = await pool.query(`
  SELECT 
    "users"."username", "messages"."message", "messages"."date", "messages"."id"
  FROM "users" JOIN "messages" ON "users"."id" = "messages"."user_id";
  `);
  return rows;
}

async function getMessageWithUserById(id) {
  const { rows } = await pool.query(
    `
  SELECT 
    "users"."username", "messages"."message", "messages"."date", "messages"."id"
  FROM "users" JOIN "messages" ON "users"."id" = "messages"."user_id" 
  WHERE "messages"."id" = $1;
  `,
    [id],
  );
  return rows;
}

async function addMessage(username, message) {
  await pool.query(
    `
  INSERT INTO "users" (
    username
  ) VALUES (
    $1
  ) ON CONFLICT (username) DO NOTHING;
  `,
    [username],
  );

  await pool.query(
    `INSERT INTO "messages" (
    message, user_id, date
  ) VALUES (
    $1,
    (SELECT id FROM "users" WHERE "username" = $2),
    NOW() 
  );
`,
    [message, username],
  );
}

module.exports = {
  getAllMessagesWithUsernames,
  getMessageWithUserById,
  addMessage,
};
