const mongoose = require("mongoose");
const User = require("./userSchema");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    description : { 
        type : String
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
});

const Comment = mongoose.model("Comment",commentSchema);

module.exports = Comment;