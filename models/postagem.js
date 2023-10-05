const mongoose = require('mongoose');


const PostagemSchema = {
    titulo: String,
    texto: String, 
};

module.exports = mongoose.model('Postagem', PostagemSchema);