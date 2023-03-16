const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


require("./db/conn")
// Datase modeule imports
const Register = require("./models/registers");


app.set('view engine', 'ejs'); 

app.use(express.static("public"))


let logedIn = false;

app.get('/', function(req, res){
    res.render("landing")
});



app.get("/Signup", (req,res)=>
{
  res.render("Signup")
})


// posting data after submit the register form 
app.post("/Signup", async(req,res)=>
{
  try{
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;

    if(password === cpassword)
    {
    
        const registerEmployee = new Register({
          username: req.body.username,
          email : req.body.email,
          phonenumber : req.body.phonenumber,
          password : req.body.password,
          confirmpassword : req.body.confirmpassword
        })

        logedIn = true;

        const registered = await registerEmployee.save();
        res.status(201)
        res.redirect("/Mainpage")


    }else{
      res.send("password not matching")
    }

  }catch(error){
    
      res.status(400).send(error);
  }


})



app.get("/Mainpage" , (req,res)=>{
    if(logedIn){
      res.render("Mainpage")
    }
    else{
      res.redirect("/login")
    }
  })


app.get("/login",(req,res)=>
{
  res.render("login")
})


app.post("/login", async(req,res)=>
{
  try {

    const user_email = req.body.email;
    const user_password = req.body.password;

  const userdata =   await Register.findOne({email:user_email})
  if(userdata.password ===user_password)
  {
    logedIn = true
    res.status(201).redirect("/Mainpage")
  }else{
    res.send("Invalid Login Details")
  }
  } catch (error) {
    res.status(400).send("Invalid Login details")    
  }
})






app.listen(port, function(){
    console.log("Server listening at 3000");
})