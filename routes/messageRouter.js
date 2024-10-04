const express = require("express");
const messageController = require("../controllers/messageController");
const messageRouter = express.Router();

messageRouter.get("/:id", messageController.messageRouteGet);

module.exports = messageRouter;
