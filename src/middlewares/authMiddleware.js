const errorGenerate = require('../utils/errorGenerate');
const { authenticateToken } = require('../utils/token');

const authMiddleware = async (req, res, next) => {
 const authorization = req.header('Authorization');
 if (!authorization) return res.status(401).json({ message: 'Token not found' });
 
 const userAuth = await authenticateToken(authorization);
 
 if (!userAuth) return next(errorGenerate('Expired or invalid token', 401));

 req.user = userAuth;
 next();
};

module.exports = authMiddleware;