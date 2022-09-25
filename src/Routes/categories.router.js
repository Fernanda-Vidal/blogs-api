const { Router } = require('express');
const categoriesController = require('../controllers/categories.controller');
const authMiddleware = require('../middlewares/authMiddleware');

const routers = Router();

routers.post('/', authMiddleware, categoriesController.createCategory);
routers.get('/', authMiddleware, categoriesController.getAllCategories);

module.exports = routers;