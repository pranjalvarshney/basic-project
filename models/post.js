const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        default: "sample"
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    comments: [{
        text: String,
        postedby:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }], 
    postedby: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

})

module.exports = mongoose.model("Post",postSchema)