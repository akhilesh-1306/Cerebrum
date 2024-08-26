const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = Schema({
    username : String,
    email : String,
    password : String,
    token : String,
});

const User = mongoose.model("user",userSchema);
module.exports = User;