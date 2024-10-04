const db = require("../db/queries");

exports.newRouteGet = (req, res) => {
  res.render("form");
};

exports.newRoutePost = async (req, res) => {
  await db.addMessage(req.body.author.trim(), req.body.message);
  res.redirect("/");
};
