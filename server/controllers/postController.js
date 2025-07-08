//handles post logic 
const Post = require("../models/Post");


const slugify = (text) =>{
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
};

//create posts
exports.createPost = async (req,res) => {
    try{
        const {title,content,featuredImage,excerpt,category,tags} = req.body;

    //    console .log('🔍 Incoming Post Data:', {
    //     title,
    //     content,
    //     featuredImage,
    //     excerpt,
    //     category,
    //     tags,
    // });
        //manually create slug
        const slug = slugify(title);
        // console.log('Generated slug:', slug);
        // console.log('saving post to DB...')


        const post = new Post({
            title,content,featuredImage,excerpt,category,tags,slug,isPublished:true
        
        });
         await post.save();
        
       
        //console.log('✅ Post saved successfully:', post);
        res.status(201).json(post);
    } catch (error){
        res.status(400).json({error:error.message});
    }
    
};

//get all post
exports.getAllposts = async(req,res) => {
    try{
        const posts = await Post.find()
            .populate('category','name slug')
            .sort({createdAt: -1});
         //console.log(posts);
        res.status(200).json(posts);
       
    } catch (error){
        console.error('Error fetching posts:', error);
        res.status(500).json({error: error.message});
    }
}

//get post by id  
exports.getpostbyID = async (req,res)  => {
    try{
        const post = await Post.findById(req.params.id)
            .populate('category','name slug')
        
        if (!post) return res.status(404).json({error:'❌Post not found'});
        res.json(post);
    } catch (error){
        res.status(500).json({error: error.message});
    }
}

//update posts
exports.updatePost = async (req,res) => {
    try{
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            runValidators:true
        });

        if (!updatedPost) return res.status(404).json({errror: '❌Post not found'});
        res.json(updatedPost);
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

//delete posts
exports.deletePost = async (req,res) => {
    try{
         const deleted = await Post.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({error: '❌Post not found'});
        res.json({message: '✅Post deleted'});
    } catch (error){
        res.status(500).json({error: error.message});
    }
}; 