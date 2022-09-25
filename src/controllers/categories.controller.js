const categoriesService = require('../services/categories.service');
const errorGenerate = require('../utils/errorGenerate');

const createCategory = async (req, res, next) => {
    if (!req.body.name) next(errorGenerate('"name" is required', 400));

    try {
        const category = await categoriesService.createCategory(req.body);
        return res.status(201).json(category);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createCategory,
};