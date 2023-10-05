require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//criando o servidor web
const app = express();

// configurando o servidor 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//conectando os controllers ao servidor web
app.use('/produtos', require('./controllers/produto_controller'));
app.use('/postagens', require('./controllers/postagem_controller'));

console.log('Conectando ao Banco de Dados ...');
mongoose.connect(process.env.URL_BANCO_DADOS).then(() => {
    console.log('Conectado ao Banco de Dados com sucesso!');
    app.listen(parseInt(process.env.PORTA_SERVIDOR), () => {
        console.log(`O servidor está no ar em http://localhost:${process.env.PORTA_SERVIDOR}`);
    });
});

