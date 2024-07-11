const Category = require("../models/categorySchema");

async function getAllCategory(req, res) {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getCategoryById(req, res) {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
async function addCategory(req, res) {
    try {
        const newCategory = new Category(req.body);
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteCategory(req, res) {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = {
    getAllCategory, addCategory, getCategoryById, deleteCategory
}