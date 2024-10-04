const db = require("../db/queries");

exports.getAllUsersAndMessages = async (req, res) => {
  const messagesObj = await db.getAllMessagesWithUsernames();
  // console.log(messagesObj);
  res.render("index", { title: "Mini Messageboard", messages: messagesObj });
};
