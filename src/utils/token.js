require('dotenv').config();
const jwt = require('jsonwebtoken');
const errorGenerate = require('./errorGenerate');

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

const authenticateToken = async (token) => {
    if (!token) throw errorGenerate('Token not found', 401);

    try {
        const validateToken = jwt.verify(token, TOKEN_SECRET);
        return validateToken;
    } catch (err) {
        throw errorGenerate('Expired or invalid token', 401);
    }
};

module.exports = {
    generateToken,
    authenticateToken,
};