const loginService = require('../services/login.service');

const authenticate = async (req, res, next) => {
    try {
        const auth = await loginService.authenticate(req.body);
        req.user = auth;

        return res.status(200).json(auth);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    authenticate,
};