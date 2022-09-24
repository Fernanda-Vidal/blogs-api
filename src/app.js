const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware');

const routesLogin = require('./Routes/login.router');

const app = express();

app.use(express.json());
app.use('/login', routesLogin);

app.use(errorMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
