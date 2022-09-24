const errorGenerate = require('../utils/errorGenerate');
const { schemaUser } = require('../utils/schema');

const validateUserMiddleware = async (req, _res, next) => {
    const { error } = schemaUser.validate(req.body);

    if (error) next(errorGenerate(error.message, 400));
    if (!req.body.image) next(errorGenerate('Some required fields are missing', 400));

    next();
};

module.exports = validateUserMiddleware;