const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({

    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'blog'
    },

    user: {
        type : String,
        required : true,
        maxLength : 30
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now()
    }

})

module.exports = mongoose.model('Like', likeSchema);