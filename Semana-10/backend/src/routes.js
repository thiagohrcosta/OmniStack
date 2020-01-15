const { Router } = require('express');
const axios = require('axios'); 

const routes = Router();

routes.get('/devs', (request, response) => {
    const { github_username }  = request.body;

    const response = axios.get(`https://api.github.com/users/${github_username}`);

    return response.json({ message: 'Hello OmniStack'});
});

module.exports = routes;