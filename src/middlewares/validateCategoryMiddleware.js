const errorGenerate = require('../utils/errorGenerate');
const { schemaPost } = require('../utils/schema');

const validateCategoryMiddleware = (req, res, next) => {
    const { error } = schemaPost.validate(req.body);

    if (error) next(errorGenerate('Some required fields are missing', 400));
    next();
};

module.exports = validateCategoryMiddleware;