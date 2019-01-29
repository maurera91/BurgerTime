const express = require("express");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.use(express.static("BurgerTime"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./config/connection");

app.use(routes);

const db = require("./models/burgers")

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
})