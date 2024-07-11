const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reactions: {
        likes: {
            type: Number,
            default: 0
        },
        dislikes: {
            type: Number,
            default: 0
        }
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    view: {
        type: Number,
        default: 0
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("News", newsSchema);
