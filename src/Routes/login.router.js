const { Router } = require('express');
const loginController = require('../controllers/login.controller');
const { validateLoginMiddleware } = require('../middlewares/validateLoginMiddleware');

const routers = Router();

routers.post('/', validateLoginMiddleware, loginController.authenticate);

module.exports = routers;