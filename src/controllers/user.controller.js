const userService = require('../services/user.service');

const addUser = async (req, res, next) => {
    try {
        const auth = await userService.addUser(req.body);

        req.user = auth;
        return res.status(200).json(auth);
    } catch (err) {
        next(err);
    }
};

const getAllUsers = async (_req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    addUser,
    getAllUsers,
};