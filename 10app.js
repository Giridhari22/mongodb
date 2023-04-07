// we need to install mongoose file
// this is the 7th video in which we install mongoose , npm init  and node
const mongoose = require("mongoose");

// connection creation AND CREAtTING A NEW VIDEO
mongoose.connect("mongodb://0.0.0.0:27017/giridharidatabase",{useNewUrlParser:true , useUnifiedTopology:true})
.then( () => console.log("connection successful "))
// for throwing error 
.catch( (err) => console.log(err));

