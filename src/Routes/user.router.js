const { Router } = require('express');
const userController = require('../controllers/user.controller');
const validateUserMiddleware = require('../middlewares/validateUserMiddleware');

const routers = Router();

routers.post('/', validateUserMiddleware, userController.addUser);

module.exports = routers;