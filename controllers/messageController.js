const db = require("../db/queries");

exports.messageRouteGet = async (req, res) => {
  // get message and user user from message id
  const messageObj = await db.getMessageWithUserById(req.params.id);
  // console.log(messageObj);
  res.render("message", { message: messageObj[0] });
};
