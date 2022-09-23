const loginService = require('../services/login.service');

const login = async (req, res) => {
    const auth = await loginService.authenticate(req.body);
    return res.send(auth);
};

module.exports = login;