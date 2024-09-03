const express = require('express')
const app = express();
const PORT = 3000;
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");
const path = require("node:path");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter);
app.use("/", indexRouter);


app.listen(PORT, () => {console.log(`Express Mini Messaging Board - Listening on Port ${PORT}`)})
