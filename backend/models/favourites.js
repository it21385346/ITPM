// models/Favorite.js

const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    dress: { type: mongoose.Schema.Types.ObjectId, ref: 'Dress', required: true }
});

module.exports = mongoose.model('Favorite', favoriteSchema);
