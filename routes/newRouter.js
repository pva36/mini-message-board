const express = require("express");
const newController = require("../controllers/newController");

const newRouter = express.Router();

newRouter.get("/", newController.newRouteGet);

newRouter.post("/", newController.newRoutePost);

module.exports = newRouter;
