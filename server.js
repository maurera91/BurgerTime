const express = require("express");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("BurgerTime"));

require("./config/connection.js");

const db = require("./models/burgers")

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
})