const { User } = require('../models');
const errorGenerate = require('../utils/errorGenerate');

const addUser = async ({ displayName, email, password, image }) => {
    const userExist = await User.findOne({ where: { email } });
    if (userExist !== null) throw errorGenerate('User already registered', 409);

    const user = await User.create(
       { displayName, email, password, image },
    );
    return user;
};

module.exports = {
    addUser,
};