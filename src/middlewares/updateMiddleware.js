const errorGenerate = require('../utils/errorGenerate');
const { schemaUpdate } = require('../utils/schema');

const updateMiddleware = async (req, res, next) => {
    const { error } = schemaUpdate.validate(req.body);

    if (error) next(errorGenerate('Some required fields are missing', 400));
    next();
};

module.exports = updateMiddleware;