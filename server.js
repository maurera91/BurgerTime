const express = require("express");

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controlers");

app.use(routes);

const db = require("./models/burgers")

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
})