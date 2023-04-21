const express = require("express");
<<<<<<< HEAD
const mongoose = require("mongoose");
const session = require("express-session");
const mongoStore = require("connect-mongodb-session")(session);

const mainRoutes = require("./routes/main");
const signInRoutes = require("./routes/auth");
const categoriesRoutes = require("./routes/categories");

const app = express();
=======
const app = express();
const relation = require("./sqlite3");
const port = process.env.PORT || 3000;
>>>>>>> 884ec2482140e2c2d5357a54ebcc4d35dbdad0ef

const MONGODB_URI =
  "mongodb+srv://node-course:node-course@cluster0.qm3rjga.mongodb.net/wizlance?retryWrites=true&w=majority";

const store = new mongoStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.use(
  session({
    secret: "wizlance",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use((req, res, next) => {
  res.locals.loggedIn = req.session.isLoggedIn;
  next();
});

app.use(mainRoutes);
app.use(signInRoutes);
app.use(categoriesRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(3000, function () {
      console.log("Server listening at 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
