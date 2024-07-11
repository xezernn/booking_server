const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
});

module.exports = mongoose.model("Login", loginSchema);

