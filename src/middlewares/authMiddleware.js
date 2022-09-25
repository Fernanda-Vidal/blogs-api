const errorGenerate = require('../utils/errorGenerate');
const { authenticateToken } = require('../utils/token');

const authMiddleware = async (req, res, next) => {
 const authorization = req.header('Authorization');
 if (!authorization) return res.status(401).json({ message: 'Token not found' });
 
 const userAuth = await authenticateToken(authorization);
 
 if (!userAuth) return next(errorGenerate('Expired or invalid token', 401));

 console.log('tokenMiddleware', userAuth);   

 req.user = userAuth;
 next();
 //  console.log('middleware Auth Token', req.header('Token'));

};

module.exports = authMiddleware;