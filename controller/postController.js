const Blog = require('../models/blog');

exports.createBlog = async (req, res)=>{
    try{

        const {user, title, description} = req.body;

        const response = await Blog.create({user, title, description});

        res.status(200).json({
            success : true,
            data : response,
            message : 'Blog successfully created'
        })

    }
    catch(error){
        console.log(error);
        console.error(error.message);

        res.status(500).json({
            success : false,
            error : error.message,
            message : 'Internal error'
        })

    }
}


exports.deleteBlog = async(req, res)=>{
    try{

        const {id} = req.params;

        await Blog.findByIdAndDelete({_id:id})

        res.status(200).json({
            success : true,
            message : 'Blog successfully deleted'
        })
    }catch(error){
        console.log(error);
        console.error(error.message);

        res.status(500).json({
            success : false,
            error : error.message,
            message : 'Internal error'
        })
    }
}


exports.getBlogById = async(req, res)=>{
    try{

        const {id} = req.params;

        const response = await Blog.findById({_id:id});

        res.status(200).json({
            success : true,
            data : response,
        })

    }
    catch(error){
        console.log(error);
        console.error(error.message);

        res.status(500).json({
            success:false,
            error : error.message,
            message : 'server error'
        })

    }
}

exports.getAllBlogs = async(req, res)=>{
    try{

        const Blogs = await Blog.find()

        res.status(200).json({
            success : true,
            data : Blogs
        })

    }
    catch(error){
        console.log(error);
        console.error(error.message);

        res.status(500).json({
            success : false,
            error : error.message,
            message : 'Internal error'
        })

    }
}

exports.updateBlog = async(req, res)=>{
    try{

        const {id} = req.params;

        const {title, description} = req.body;

        const response = await Blog.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt : Date.now()}
            )

        res.status(200).json({
            success : true,
            data : response,
            message : 'Data successfully updated'
        })

    }
    catch(error){
        console.log(error);
        console.error(error.message);

        res.status(500).json({
            success:false,
            error : error.message,
            message : 'server error'
        })
    }
}