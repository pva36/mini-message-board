const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const messages = require("./models/messages");

const app = express();

app.use(express.urlencoded({ extended: true }));

// set ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", indexRouter);

app.use("/new", newRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
