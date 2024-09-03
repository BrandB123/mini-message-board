const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) => res.send("Welcome to the NEW Message Form!"));

module.exports = newRouter;