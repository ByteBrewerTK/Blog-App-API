const Comment = require('../models/commentModel');
const Blog = require('../models/blog')

exports.createComment = async (req, res)=>{
    try{
        const {post, user, body} = req.body;

        const response = await Comment.create({post, user, body});

        const updatedPost = await Blog.findByIdAndUpdate(post, {$push : {comments : response._id}}, {new : true})
            .populate('comments')
            .exec()
        
        res.status(200).json({
            success : true,
            data : updatedPost,
            message : 'Comment successfully created'
        })

    }catch(error){

        console.log(error)
        console.error(error.message)

        res.status(500).json({
            success : false,
            error : error.message,
            message : 'Internal Error'
        })

    }
}