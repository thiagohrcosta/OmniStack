const express = require('express');
const mongoose = requere = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Thiago:<omnistack123456>@cluster0-z0kfu.mongodb.net/week10s?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
