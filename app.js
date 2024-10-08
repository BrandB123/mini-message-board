const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("node:path");
const indexRouter = require("./routes/indexRouter")
const newRouter = require("./routes/newRouter")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, '0.0.0.0', () => {console.log(`Express Mini Messaging Board - Listening on http://0.0.0.0:${PORT}`)})
