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

const createDocument = async() =>{
    try{
        const reactPlaylist = new Playlist({
    name:"React JS",
    ctype :"Front End",
    videos:80,
    author:"Thapa Technical",
    active: true

    })
    const mongoPlaylist = new Playlist({
    name:"mongo",
    ctype :"Back End",
    videos:80,
    author:"Thapa Technical",
    active: true

    })
    const mongoosePlaylist = new Playlist({
    name:"mongoose",
    ctype :"Back End",
    videos:80,
    author:"Thapa Technical",
    active: true

    })
    const javascriptPlaylist = new Playlist({
    name:"JavaScript",
    ctype :"Front End",
    videos:80,
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
    const output = await Playlist.insertMany([htmlPlaylist,mongoPlaylist,javascriptPlaylist,mongoosePlaylist,reactPlaylist]);
    console.log(output);
}catch(err){
    console.log(err);
}
}
// we gonna call that function
// createDocument();

// 16 logical operator
const getDocument = async() =>{
    try{
        const result = await Playlist 
        //1. using or logical operator - isme sara data aa jayega qki sbka author same hai
    //     .find({$or:[{ctype:"Back End"},
    // {author:"Thapa Technical"}]})

   //2. using and logical opeartor - isme sara data nhi aayega qki dono condition jisme true hogi uska hi result dega
      .find({$and:[{ctype:"Back End"},
    {author:"Thapa Technical"}]})

    .select({name:1})
    console.log(result);
    }catch(err){
        console.log(err);
    }
}

getDocument();