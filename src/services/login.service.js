const { User } = require('../models');
const errorGenerate = require('../utils/errorGenerate');
const { generateToken } = require('../utils/token');

const authenticate = async ({ email, password }) => {
    const user = await User.findOne({
        attributes: ['id', 'email', 'displayName'],
        where: { email, password },
    });

    if (!user) throw errorGenerate('Invalid fields', 400);

    const token = generateToken(user.dataValues);

    return { token };
};

module.exports = {
    authenticate,
};