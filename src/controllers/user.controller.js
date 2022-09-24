const userService = require('../services/user.service');

const addUser = async (req, res, next) => {
    try {
        const newUser = userService.addUser(req.body);
        return res.status(200).json({ messsage: newUser });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    addUser,
};