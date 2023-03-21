const express = require("express");
const relation = require("../sqlite3");

const db = relation.connect();
relation.createTable(db);

const router = express.Router();

router.get("/signup", (req, res, next) => {
  res.render("pages/signup");
});

router.post("/signup", async (req, res, next) => {
  let firstName = req.body.firstname;
  let lastName = req.body.lastname;
  let eMail = req.body.email;
  let password = req.body.password;

  let exist;

  function checkAccountsExists(eMail) {
    return new Promise((resolve, rejects) => {
      db.get(`SELECT * FROM user WHERE eMail = ?`, [eMail], (err, row) => {
        if (err) {
          console.log(err.message);
          rejects(err);
        }
        exist = !!row;
        resolve(exist);
      });
    });
  }

  exist = await checkAccountsExists(eMail);
  if (exist) {
    res.status(400).send({
      message: "Account already exists.",
    });
  } else if (!exist) {
    db.run(
      "insert into user (fname, lname, email, password) values " +
        "('" +
        firstName +
        "','" +
        lastName +
        "','" +
        eMail +
        "','" +
        password +
        "')",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          loggedIn = true;
          res.redirect("mainpage");
        }
      }
    );
  }
});

router.get("/login", (req, res, next) => {
  res.render("pages/login");
});

router.post("/login", async (req, res, next) => {
  let email = req.body.email_address;
  let password = req.body.login_password;
  await db.get(
    "SELECT password FROM user WHERE email = ?",
    [email],
    (err, row) => {
      if (err) {
        console.error(err.message);
        return;
      }
      if (row) {
        let password_check;
        password_check = row.password;
        console.log(password);
        console.log(row.password);
        if (row.password === password) {
          loggedIn = true;
          res.redirect("mainpage");
        } else {
          res.send("Invalid login details 1");
        }
      } else {
        res.send("Invalid login details");
      }
    }
  );
});

module.exports = router