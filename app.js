const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const mongoStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");

const mainRoutes = require("./routes/main");
const signInRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/categories");
const adminRoutes = require("./routes/admin");
const freelancerRoutes = require("./routes/freelancer");

const app = express();

const MONGODB_URI =
  "mongodb+srv://wizproject13:Room%40112@wizlance.5ecwge7.mongodb.net/wizlance";

const store = new mongoStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "wizlance",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(flash());

app.use((req, res, next) => {
  if (req.session.user) {
    const fname = req.session.user.firstName;
    const letter = fname.slice(0, 1);
    res.locals.profileLogo = letter;
  }
  res.locals.loggedIn = req.session.isLoggedIn;
  next();
});

app.use(mainRoutes);
app.use(signInRoutes);
app.use(categoryRoutes);
app.use(adminRoutes);
app.use(freelancerRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server listening at 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
