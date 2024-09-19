const { Router } = require("express");
const createMessagePost = require("../controllers/createMessagePost")

const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("form");
});

newRouter.post("/", (req, res) => {
    createMessagePost(req, res);
}) 

module.exports = newRouter;