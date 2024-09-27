const express = require("express");
const messages = require("../models/messages");

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = indexRouter;
