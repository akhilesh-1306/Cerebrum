const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Comment = require("./commentSchema");

const postSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    content : { 
        type : String
    },
    image : {
        url : String,
        filename : String,
    },
    comments : [
        {
            type : Schema.Types.ObjectId,
            ref : "Comment"
        },
    ],
    // owner : {
    //     type : Schema.Types.ObjectId,
    //     ref : "User"
    // },
});

const Post = mongoose.model("Post",postSchema);

module.exports = Post;