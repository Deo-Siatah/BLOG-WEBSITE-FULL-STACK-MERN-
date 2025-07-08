const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        slug: {
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
    },
    {timestamps: true}
);

//Auto generate slug 
categorySchema.pre('save', function(next){
    this.slug = this.name
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
    next();
});

module.exports = mongoose.model('Category',categorySchema);