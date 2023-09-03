// Initialize express
const express = require('express')

// import Router from express
const router = express.Router();

// Import post controllers using destructuring method
const {

    createBlog,
    deleteBlog,
    getBlogById,
    updateBlog,
    getAllBlogs

    } = require('../controller/postController');

// Mount all the controller to the specific path
router.post('/blogs/createBlog', createBlog);
router.delete('/blogs/deleteBlog/:id',deleteBlog);
router.get('/blogs/getBlogById/:id', getBlogById);
router.put('/blogs/updateBlog/:id', updateBlog);
router.get('/blogs/getAllBlogs', getAllBlogs);


// Importing comment controller using destructuring method

const {createComment} = require('../controller/commentController');
const {createLike, deleteLike} = require('../controller/likeController');

// Mounting the controller to the specific path
router.post('/blogs/comments/createComment', createComment);
router.post('/blogs/likes/createLikes', createLike);
router.post('/blogs/likes/deleteLike', deleteLike);

module.exports = router;

