const Dev = require('../models/Dev.js');

module.exports = {
    async indexedDB(request, response) {
        console.log(request.query);
        // Buscar todos os devs em um raio de 10km
        // Filtrar por tecnologias utilizadas pelos Dev
        return response.json( { devs: [] });
    }
}