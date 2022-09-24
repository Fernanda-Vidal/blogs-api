const loginService = require('../services/login.service');

const authenticate = async (req, res, next) => {
    try {
        const auth = await loginService.authenticate(req.body);
        req.user = auth;
        console.log('token', typeof req.user);
        return res.status(200).json();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    authenticate,
};