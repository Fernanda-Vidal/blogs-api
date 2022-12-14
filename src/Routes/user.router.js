const { Router } = require('express');
const userController = require('../controllers/user.controller');
const validateUserMiddleware = require('../middlewares/validateUserMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const routers = Router();

routers.get('/:id', authMiddleware, userController.getUserById);
routers.post('/', validateUserMiddleware, userController.addUser);
routers.delete('/me', authMiddleware, userController.deleteMe);
routers.get('/', authMiddleware, userController.getAllUsers);

module.exports = routers;