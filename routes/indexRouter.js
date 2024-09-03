const { Router } = require("express");
const indexRouter = Router();
  
indexRouter.get("/", (req, res) => res.send("Welcome to the Mini Message Board!"));

module.exports = indexRouter;