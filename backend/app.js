require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const {posts} = require("./data/data");
const Post = require("./schema/postSchema");

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// app.get("/addPosts",async(req,res)=>{
//     posts.forEach((item)=>{
//         let tempPost = new Post({
//             title : item.title,
//             content : item.content,
//             image : item.image,
//             comment : item.comments,
//         });
//         tempPost.save();
//     });
//     res.send("Data has been saved");
// })

app.get("/allPosts",async(req,res)=>{
    let allPosts = await Post.find({});
    // let jsonAllPosts = allPosts.json();
    JSON.stringify(allPosts);
    res.send(allPosts);
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
    mongoose.connect(url);
    console.log("DB connected")
})

app.get("/",(req,res)=>{
    res.send("Working");
})

