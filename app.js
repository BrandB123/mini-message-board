const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
    res.render("form");
});

app.post("/new", (req, res) => {
    console.log(req.body)
    const author = req.body.author;
    const message = req.body.message;
    console.log(`Author: ${author}`);
    console.log(`Message: ${message}`);
    messages.push({ text: message, user: author, added: new Date() });
    res.redirect("/")
})


app.listen(PORT, '0.0.0.0', () => {console.log(`Express Mini Messaging Board - Listening on http://0.0.0.0:${PORT}`)})
