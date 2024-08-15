require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
    mongoose.connect(url);
    console.log("DB connected")
})

app.get("/",(req,res)=>{
    res.send("Working");
})

