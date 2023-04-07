
const mongoose = require("mongoose");

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
        uppercase:true,
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
    email:String,
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
    email:"giri@123",
    active: true

    })
   
    const output = await Playlist.insertMany([htmlPlaylist]);
    console.log(output);
}catch(err){
    console.log(err);
}
}
createDocument();

