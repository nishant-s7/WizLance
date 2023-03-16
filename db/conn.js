// const mongoose = require("mongoose")

// mongoose.connect("mongodb+srv://nikunj:<password>@cluster0.mqeedx1.mongodb.net/?retryWrites=true&w=majority" 
// ).then(()=>
// {
//     console.log("connection Successful");

// }).catch((e)=>
// {
// console.log("no connetction");
// })


const mongoose = require('mongoose')

const url = `mongodb+srv://nikunj:nikunjkhinchi@cluster0.mqeedx1.mongodb.net/?retryWrites=true&w=majority`;

// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// }

mongoose.connect(url,{useNewUrlparser:true})
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })