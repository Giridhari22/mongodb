
const mongoose = require("mongoose");

// connection creation AND CREAtTING A NEW VIDEO
mongoose.connect("mongodb://0.0.0.0:27017/giridharidatabase",{useNewUrlParser:true , useUnifiedTopology:true})
.then( () => console.log("connection successful "))
// for throwing error 
.catch( (err) => console.log(err));

// schema
// A mongoose schema defines the structure of the document, 
// default validatiors, values, etc.,

// ham isme likhnge ki kis form m data ko store karna chahte hai

const playlistSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    ctype : String, //ctype = coursetype
    videos: Number,
    author : String,
    active: Boolean,
    date:{
        type:Date,
        default: Date.now
    } 
})

// A Mongoose model is a wrapper on the mongoose schema.
//provides a interface to the database for creeating , querying, updating , deleting records 

// collection creation
// hmesa singular m hi likhna hai like playlist not playlists .. aur hmesa phla letter capital hona chahiye
const Playlist = new mongoose.model("Playlist", playlistSchema);