const Like = require('../models/likeModel');
const Blog = require('../models/blog')

exports.createLike = async (req, res)=>{
    try{
        const {post, user} = req.body;

        const response = await Like.create({post,user});

        const updatedPost = await Blog.findByIdAndUpdate(post, {$push : {likes : response._id}}, {new : true})
            .populate('likes')
            .exec()


        res.status(200).json({
            post : updatedPost
        })
    }catch(error){
        // return res.status(500);
        console.error(error.message);
    }
}

exports.deleteLike = async(req, res)=>{

    try{

        const {post, like} = req.body;

        const deletedLike = await Like.findByIdAndDelete({post : post, _id : like});

        const updatedPost = await Blog.findByIdAndUpdate(post, {$pull : {likes :  deletedLike._id}}, {new : true})
            .populate('likes')
            .populate('comments')
            .exec()

        res.status(200).json({
            posts : updatedPost 
        })
    }
    catch(error){
        // return res.status(500)
        console.error(error.message);
    }
    
}