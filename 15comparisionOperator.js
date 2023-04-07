const mongoose = require("mongoose");

// connection creation AND CREAtTING A NEW VIDEO
mongoose.connect("mongodb://0.0.0.0:27017/giridharidatabase",{useNewUrlParser:true , useUnifiedTopology:true})
.then( () => console.log("connection successful "))
// for throwing error 
.catch( (err) => console.log(err));

// 11 schema
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
//provides a interface to the database for creating , querying, updating , deleting records 

// collection creation
// hmesa singular m hi likhna hai like playlist not playlists .. aur hmesa phla letter capital hona chahiye
const Playlist = new mongoose.model("Playlist", playlistSchema);

//12 create document or insert
// bina async use kiye await use nhi kr skte
const createDocument = async() =>{
    try{
        const reactPlaylist = new Playlist({
    name:"React JS",
    ctype :"Front End",
    videos:50,
    author:"Thapa Technical",
    active: true

    })
    const mongoPlaylist = new Playlist({
    name:"mongo",
    ctype :"Back End",
    videos:30,
    author:"Thapa Technical",
    active: true

    })
    const mongoosePlaylist = new Playlist({
    name:"mongoose",
    ctype :"Back End",
    videos:40,
    author:"Thapa Technical",
    active: true

    })
    const javascriptPlaylist = new Playlist({
    name:"JavaScript",
    ctype :"Front End",
    videos:60,
    author:"Thapa Technical",
    active: true

    })
    const htmlPlaylist = new Playlist({
    name:"html",
    ctype :"Front End",
    videos:80,
    author:"Thapa Technical",
    active: true

    })
    // 13 iss method se sara kaam promise m return hota hai
    // insertMany k wjh se 1 se jyada document ko ham add kr skte hai
    const result = await Playlist.insertMany([htmlPlaylist,mongoPlaylist,javascriptPlaylist,mongoosePlaylist,reactPlaylist]);
    // console.log(result);
}catch(err){
    console.log(err);
}
}
// we gonna call that function
// createDocument();

// 15 we create new doc to get the data
// comparision operator
const getDocument = async() =>{
    try{
        const result = await Playlist
    .find({videos:{$gt:50}})
    // .find({videos:{$gte:40}})//greater than equal to
    // .find({videos:{$lt:50}}) //less than
    // .find({videos:{$lte:50}}) //less than equalto
    // .find({videos:{$ne:50}})//not equal
    // .find({ctype:{$in:["Front End"]}}) //in present of
    // .find({videos:{$nin :["Front End"]}}) //not in present of


    .select({name:1})
    // .limit(5); //to get the very first searched element
    console.log(result);

    }catch(err){
        console.log(err);
    }
    
}

getDocument();

