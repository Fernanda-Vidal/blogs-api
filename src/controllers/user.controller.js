const userService = require('../services/user.service');

const addUser = async (req, res, next) => {
    try {
        const auth = await userService.addUser(req.body);

        req.user = auth;
        return res.status(201).json(auth);
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

const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        return res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

const deleteMe = async (req, res, next) => {
    try {
        const { id } = req.user;
        const deleteUser = await userService.deleteMe(id);
        return res.status(204).json(deleteUser);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    deleteMe,
};