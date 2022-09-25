const { User } = require('../models');
const errorGenerate = require('../utils/errorGenerate');
const { generateToken } = require('../utils/token');

const addUser = async ({ displayName, email, password, image }) => {
    const userExist = await User.findOne({ where: { email } });
    console.log(userExist);
    if (userExist !== null) throw errorGenerate('User already registered', 409);

    const user = await User.create(
       { displayName, email, password, image },
    );

    const token = generateToken(user.dataValues);
    return { token };
};

const getAllUsers = async () => {
        const users = await User.findAll({ 
            attributes: ['id', 'displayName', 'email', 'image'],
        });
        return users;
};

module.exports = {
    addUser,
    getAllUsers,
};