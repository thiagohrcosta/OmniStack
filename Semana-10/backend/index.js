const express = require('express');
const mongoose = requere = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Thiago:<omnistack123456>@cluster0-z0kfu.mongodb.net/week10s?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteraçaõ de um registro)

// MongoDB (não-relacional)

app.get('/', (request, response) => {
    console.log(request.query);
    return response.json({ message: 'Hello OmniStack'});
});

app.listen(3333);
