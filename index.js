const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/dataa", (req, res) => {
    console.log(req.body);
    res.send("ok");
});

app.listen(port, () => {
    console.log("listening on port ", port);
});
