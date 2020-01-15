const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

routes.get('/devs', DevController.store );

module.exports = routes;