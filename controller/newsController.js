const News = require("../models/newsSchema");

async function getAllNews(req, res) {
    try {
        const newsItems = await News.find().populate("categoryId");
        res.status(200).json(newsItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getNewsById(req, res) {
    try {
        const { id } = req.params;
        const newsItem = await News.findById(id);
        if (!newsItem) {
            return res.status(404).json({ error: 'Ha bu xeberi tapa bilmedim!' });
        }
        res.status(200).json(newsItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function addNews(req, res) {
    try {
        const newNewsItem = new News(req.body);
        const savedNewsItem = await newNewsItem.save();
        res.status(201).json(savedNewsItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function deleteNews(req, res) {
    try {
        const { id } = req.params;
        const newsItem = await News.findByIdAndDelete(id);
        if (!newsItem) {
            return res.status(404).json({ error: 'News item not found' });
        }
        res.status(200).json({ message: 'News item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getAllNews, addNews, getNewsById, deleteNews
}
