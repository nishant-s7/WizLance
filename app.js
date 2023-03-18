const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('pages/landing_nol.ejs');
});

app.listen(3000, function(){
    console.log("Server listening at 3000");
})