const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String,
    directior: String
});

const MovieModel = mongoose.model('MovieModel', MovieSchema);

module.exports = MovieModel;