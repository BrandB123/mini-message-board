const { Router } = require("express");
const getDBMessages = require("../controllers/getDBMessages");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
   getDBMessages(req, res);
});

module.exports = indexRouter;