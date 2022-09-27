const { Router } = require('express');
const postController = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/authMiddleware');
const updateMiddleware = require('../middlewares/updateMiddleware');
const validateCategoryMiddleware = require('../middlewares/validateCategoryMiddleware');

const routers = Router();

routers.get('/search', authMiddleware, postController.getSearchPost);
routers.post('/', authMiddleware, validateCategoryMiddleware, postController.createPost);
routers.put('/:id', authMiddleware, updateMiddleware, postController.updatePost);
routers.get('/:id', authMiddleware, postController.getPostById);
routers.delete('/:id', authMiddleware, postController.deletePost);
routers.get('/', authMiddleware, postController.getBlogPosts);

module.exports = routers;