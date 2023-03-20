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

// database connection
const db = relation.connect();
relation.createTable(db);

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');


let loggedIn = false;

app.get('/', function(req, res){
    loggedIn = false;
    res.render('pages/landing_nol.ejs');
});



app.get("/signup", (req,res)=>
{
  res.render("pages/signup")
})


app.post("/signup", async(req, res) => {
    let firstName = req.body.firstname
    let lastName = req.body.lastname
    let eMail = req.body.email
    let password = req.body.password
  
    let exist;
  
    function checkAccountsExists(eMail)
    {
     
      return new Promise((resolve , rejects)=>{
        db.get(`SELECT * FROM user WHERE eMail = ?` , [eMail], (err ,row)=>{
          if(err)
          {
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
            message: "Account already exists."
        });
    } else if (!exist) {
        db.run("insert into user (fname, lname, email, password) values " + "('" + firstName + "','" + lastName + "','" + eMail + "','" + password + "')", err => {
            if (err) {
                console.log(err);
            } else {
              loggedIn = true;
                res.redirect("mainpage");
            }
        });
    }
  
  })
  
  
  app.get("/login",(req,res)=>
{
  res.render("pages/login")
})


app.post("/login", async (req, res) => {
    let email = req.body.email_address;
    let password = req.body.login_password;
    await db.get("SELECT password FROM user WHERE email = ?", [email], (err, row) => {
        if (err) {
            console.error(err.message);
            return;
        }
        if (row) {
            let password_check;
            password_check = row.password
            console.log(password);
            console.log(row.password);
            if (row.password === password) {
                loggedIn = true;
                res.redirect("mainpage")
            }else {
                res.send("Invalid login details 1");
            }
        } else {
            res.send("Invalid login details");
        }
    });
  })

app.get("/mainpage" , (req,res)=>{
    if(loggedIn){
      res.render("pages/mainpage")
    }
    else{
      res.redirect("login")
    }
  });

app.get('/graphics-design', (req, res) => {
  if(loggedIn) res.render('pages/graphics-design');
  else res.redirect('login');
});

app.get('/logo-design', (req, res) => {
  if(loggedIn) res.render('pages/logo-design');
  else res.redirect('login');
});

app.get('/profile-templates', (req, res) => {
  if(loggedIn) res.render('pages/profile-templates');
  else res.redirect('login');
});


app.listen(3000, function(){
    console.log("Server listening at 3000");
})