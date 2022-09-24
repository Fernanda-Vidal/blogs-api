const errorGenerate = require('../utils/errorGenerate');
const { schemaLogin } = require('../utils/schema');

const validateLoginMiddleware = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) next(errorGenerate('Some required fields are missing', 400));
    
    const { error } = schemaLogin.validate(req.body);
    if (error) next(errorGenerate('Invalid fields', 400));

    next();
};

module.exports = {
    validateLoginMiddleware,
};