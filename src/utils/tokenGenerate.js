require('dotenv').config();
const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const generateToken = ({ id, displayName }) => {
    const payload = { id, displayName };

    const jwtConfig = {
        expiresIn: '15m',
        algorithm: 'HS256',
    };

    const token = jwt.sign(payload, TOKEN_SECRET, jwtConfig);

    return token;
};

module.exports = generateToken;