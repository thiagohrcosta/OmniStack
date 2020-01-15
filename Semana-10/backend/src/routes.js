const { Router } = require('express');

const routes = Router();

routes.get('/devs', (request, response) => {
    const { github_username }  = request.body;
    return response.json({ message: 'Hello OmniStack'});
});

module.exports = routes;