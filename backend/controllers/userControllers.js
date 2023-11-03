const User = require('../models/userModel');
const generateToken = require('../config/generateToken'); // Corrected path

const registerUser = async (req, res) => {
    const { name, email, password, pic } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: "Please enter all the fields" });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ error: "User already exists" });
        }

        const user = await User.create({
            name,
            email,
            password,
            pic,
        });

        if (user) {
            const token = generateToken(user._id);

            return res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                pic: user.pic,
                token, // Include the generated JWT token
            });
        } else {
            return res.status(500).json({ error: "Failed to create user" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
};

module.exports = { registerUser };
