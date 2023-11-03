const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: {
        type: String,
        default: "https://icons-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
}, { timestamps: true });

const User = mongoose.model("User", chatModel); // Use chatModel here
module.exports = User;
