const { rejects } = require("assert");
const express = require("express");
const { resolve } = require("path");
const bodyParser = require("body-parser");
const path = require("path");
const { exit } = require("process");
const app = express();
const relation = require("./sqlite3");
const async = require("async");
const port = process.env.PORT || 3000;

const mainRoutes = require("./routes/main")
const signInRoutes = require("./routes/signIn")
const categoriesRoutes = require('./routes/categories')

// database connection
const db = relation.connect();
relation.createTable(db);

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

let loggedIn = false;

app.use(mainRoutes);
app.use(signInRoutes);
app.use(categoriesRoutes)

app.listen(3000, function () {
  console.log("Server listening at 3000");
});
