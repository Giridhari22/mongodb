// 22 in this video we use npm validator and we gonna install by using ("npm i validator")

const mongoose = require("mongoose");
const validator = require("validator");

// connection creation AND CREAtTING A NEW VIDEO
mongoose.connect("mongodb://0.0.0.0:27017/giridharidatabase",{useNewUrlParser:true , useUnifiedTopology:true })
.then( () => console.log("connection successful "))
// for throwing error 
.catch( (err) => console.log(err));

// 20 in this video 
const playlistSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique: true,
        lowercase:true,
        // lowercase:true,
        // trim:true  //it is used to remove spaces between or spaces in and out of the data
    
    },
    ctype : {
        type:String, //ctype = coursetype,
        
    },
    // 21 custom validation
    videos: {
        type:Number,
        // validate(value){
        //     if(value < 0){
        //         throw new Error("videos count should not be negative");
        //     }
        // }
     
    },
    author : String,
    // 22 npm validator 
    // isme agar hamara email invalid hoga to error throw karega
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is inValid");

            }
        }
    },
    active: Boolean,
    date:{
        type:Date,

        default: Date.now
    } 
})

const Playlist = new mongoose.model("Playlist", playlistSchema);



const createDocument = async() =>{
    try{
        const htmlPlaylist = new Playlist({
    name:"html",
    ctype :"Front End",
    videos:80,
    author:"Thapa Technical",
    email:"giri123@gmail.com",//agar ham galat  email dalenge yaha pe to console m alag hi kuch v print hoga
    active: true

    })
   
    const output = await Playlist.insertMany([htmlPlaylist]);
    console.log(output);
}catch(err){
    console.log(err);
}
}
createDocument();

