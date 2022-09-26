const { Router } = require('express');
const postController = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const validateCategoryMiddleware = require('../middlewares/validateCategoryMiddleware');

const routers = Router();

routers.post('/', authMiddleware, validateCategoryMiddleware, postController.createPost);
routers.get('/', authMiddleware, postController.getBlogPosts);

module.exports = routers;