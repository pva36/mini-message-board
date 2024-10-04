const express = require("express");
const messages = require("../models/messages");
const db = require("../db/queries");
const indexController = require("../controllers/indexController");

const indexRouter = express.Router();

indexRouter.get("/", indexController.getAllUsersAndMessages);

module.exports = indexRouter;
