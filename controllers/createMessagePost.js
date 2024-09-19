const db = require("../db/queries");

async function createMessagePost(req, res){
    console.log(req.body)
    const name = req.body.name;
    const message = req.body.message;
    const timestamp = new Date();
    console.log(`Name: ${name}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${timestamp}`);
    await db.insertMessage(name, message, timestamp);
    res.redirect("/")
}

module.exports = createMessagePost;