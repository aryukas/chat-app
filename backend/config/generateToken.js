const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    const expiresIn = '2d';
    const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn });
    return token;
};

module.exports = generateToken;
