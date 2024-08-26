require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const {posts} = require("./data/data");
const Post = require("./schema/postSchema");
const User = require("./schema/userSchema")
const { v4: uuidv4 } = require('uuid');

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Working");
})

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

app.post("/signup",async(req,res)=>{
    const uniqueId = uuidv4();
    console.log(uniqueId);
    const {username,email,password} = req.body;
    User.create({
        username:username,
        email:email,
        password:password,
        token:uniqueId
    })
    .then((user)=>{
        res.json(user);
    })
    .catch((err)=>{
        res.json(err);
    })
})

app.post("/login",(req,res)=>{
    const {username,password} = req.body;
    User.findOne({username:username})
    .then((user)=>{
        if(user){
            if(user.password === password){
                res.json("Success");
                // res.cookie("userLoggedIn",user.token,{
                //     // httpOnly:true,
                //     // expires: new Date(date.now() + 24 * 60 * 60 * 1000)
                // })
            }
            else{
                res.json("Password is incorrect");
            }
        }
        else{
            res.json("User doesnt exist");
        }
    })
    .catch((err)=>{
        res.json(err);
    })
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
    mongoose.connect(url);
    console.log("DB connected")
})


