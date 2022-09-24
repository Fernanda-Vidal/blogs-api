const errorGenerate = require('../utils/errorGenerate');
const { authenticateToken } = require('../utils/token');

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;

    try {
        const user = await authenticateToken(token);

        req.user = user;
        next();
    } catch (err) {
        throw errorGenerate(err);
    }
};

module.exports = authMiddleware;