const express = require('express');
const router = express.Router();
const {createPost,getAllposts,getpostbyID,updatePost,deletePost} = require('../controllers/postController');

//POST route
router.post('/',createPost);

//getAllpost
router.get('/',getAllposts);

//getpostbyID 
router.get('/:id',getpostbyID);

//updatePost
router.put('/:id',updatePost);

//deletePost
router.delete('/:id',deletePost);

module.exports = router;