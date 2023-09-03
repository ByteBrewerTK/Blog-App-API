const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

    user:{
        type : String,
        required : true,
        maxLength : 30
    },

    title:{
        type : String,
        required : true,
        maxLength : 30
    },

    description : {
        type : String,
        maxLength : 40
    },

    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Like'
    }],

    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }],

    createdAt : {
        type : Date,
        required : true,
        default : Date.now()
    },

    updatedAt : {
        type : Date,
        required : true,
        default : Date.now()
    }


});

module.exports = mongoose.model('blog', blogSchema);
