const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'blog'
    },

    user: {
        type : String,
        required : true,
        maxLength : 30
    },

    body : {
        type : String,
        required : true,
        maxLength : 200
    },
    
    createdAt : {
        type : Date,
        required : true,
        default : Date.now()
    }

})

module.exports = mongoose.model('Comment', commentSchema);