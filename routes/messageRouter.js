const express = require("express");
const messages = require("../models/messages");

const messageRouter = express.Router();

messageRouter.get("/:id", (req, res) => {
  res.render("message", { message: messages[req.params.id] });
});

module.exports = messageRouter;
