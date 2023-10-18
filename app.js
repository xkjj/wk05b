const express = require("express");
const app = express();
const path = require("path");

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));

app.get("/", (req, res) => {

    const uID = "Kaspar Jarosz";

    const playlist = [
        { "name": "jbs hits", "likes": 30 },
        { "name": "sample", "likes": 10 },
        { "name": "jbs", "likes": 0 },
        { "name": "my hits", "likes": 7 },
        { "name": "metal", "likes": 122 },
        { "name": "rock", "likes": 64 },
    ];


    res.render("landing", { data: playlist, user: uID });

});

app.get("/playlist", (req, res) => {

    res.render("play");

});



app.listen(3000);
console.log("App running on localhost:3000/");