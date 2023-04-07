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

// // 17 . Query Method 
// // two types- count and sorting  
// const getDocument = async() =>{
//     try{
//         const result = await Playlist 
//       .find({author:"Thapa Technical"})
//     .select({name:1})
//     // 1. count query method - this is how we count document
//     // .countDocuments();
//     // if we have to sort the name in ascending to descending order by a-z 
//     // .sort({name:1});
//     // for descending order
//     .sort({name:-1});
//     console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();  

// 18 update the query document
// we gonna update mongoose into Mongoose .. actually in capital letter
const updateDocument = async(_id) =>{
    try{
        // 1. this is how we gonna update by id 
        // const result = await Playlist.updateOne({_id},{
            // 2 this is how we find id as well as update
            const result = await Playlist.findByIdAndUpdate({_id},{
            $set: {
                name:"Mongoose wale bhaihya"
            }},
            {
                // isse ham new updated data ko console m dekh paynge
                new:true,
                useFindModify: false 
        });
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// updateDocument("6328ac284536e1ddfcaca745") //id of mongoose which is already pass in mongo compass app

// 19 delete the document by considering id 
const deleteDocument= async(_id)=>{
    try{
        const result = await Playlist.findByIdAndDelete({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
deleteDocument("6328ac284536e1ddfcaca743")
// 19 delete the document 