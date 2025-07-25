const Category = require("../models/Category")

//create a category
exports.createCategory = async (req,res) => {
    try{
        const { name } = req.body;
        const category = new category({name});
        await category.save();
        res.status(201).json(category)
    } catch{
        res.status(400).json({error: error.message});
    }   
};

//Get all categories
exports.getAllCategories = async (req,res) => {
    try{
        const categories = await Category.find().sort({createdAt: -1});
        res.json(categories);
    } catch (error){
        res.status(500).json({error:error.message});
    }
};
