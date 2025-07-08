const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: [true,'Please provide a title'],
            trim:true,
            maxlength:[100,'Title cannot be more than 100 characters'],
        },
        content:{
            type:String,
            required:[true,'Please provide content'],
        },
        featuredImage:{
            type:String,
            default:'default-post.jpg',//th
        },
        slug:{
            type:String,
            required:true,
            unique:true,
        },
        excerpt:{
            type:String,
            maxlength:[200,'Excerpt cannot be more than 200 characters'],
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Category',
            required:true,
        },
        isPublished:{
            type:Boolean,
            default:false,
        },
        viewCount:{
            type:Number,
            default:0,
        },
        tags:[String]
    },
    {timestamps:true}
);

//create slug from title before saving
// postSchema.pre('save', function (next) {
//     console.log("Generating slug for post:", this.title);
//     if (!this.isModified('title'))  return next();

//     this.slug = this.title
//         .toLowerCase()
//         .replace(/[^\w ]+/g, '')
//         .replace(/ +/g, '-');
//     next();
// });

//virtual for post URL
postSchema.virtual('url').get(function(){
    return `/posts/${this.slug}`;
});

//Method to increment view count
postSchema.methods.incrementViewCount = function(){
    this.viewCount += 1;
    return this.save();
};

module.exports = mongoose.model('Post',postSchema);
