const { User } = require('../models');
const errorGenerate = require('../utils/errorGenerate');
const generateToken = require('../utils/token');

const addUser = async ({ displayName, email, password, image }) => {
    const userExist = await User.findOne({ where: { email } });

    if (userExist !== null) throw errorGenerate('User already registered', 409);

    const user = await User.create(
       { displayName, email, password, image },
    );

    const token = generateToken(user.dataValues);
    return { token };
};

module.exports = {
    addUser,
};