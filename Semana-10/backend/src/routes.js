const { Router } = require('express');
const axios = require('axios'); 
const Dev = require('./models/Dev');

const routes = Router();

routes.get('/devs', async (request, response) => {
    const { github_username, techs }  = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
    const { name = login, avatar_url, bio } = apiResponse.data;
        // aqui serão inseridos os dados de pesquisa, que foram filtrados a partir do {},
        // o response foi alterado para apiResponse
        // name = login,  caso o usuário não tenha um nome cadastrado, automatícamente busca-se seu login.

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    });

    return response.json(dev);
});

module.exports = routes;