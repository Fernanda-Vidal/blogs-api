const { Category } = require('../models');
const errorGenerate = require('../utils/errorGenerate');

const createCategory = async ({ name }) => {
    const categoryExists = await Category.findOne({ where: { name } });
    if (categoryExists !== null) throw errorGenerate(`Category ${name} already exists`);

    const category = await Category.create({ name });

    return category;
};

const getAllCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    createCategory,
    getAllCategories,
};