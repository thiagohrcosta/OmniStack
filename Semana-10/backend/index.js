const express = require('express');

const app = express()

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body:

app.get('/', (request, response) => {
    console.log(request.query);
    return response.json({ message: 'Hello OmniStack'});
});

app.listen(3333);
