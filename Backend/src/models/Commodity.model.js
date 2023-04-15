const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    symbol: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true, unique: true },
    change: { type: String, required: true },
    per_change: { type: String, required: true },
    volume: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const Commodity = mongoose.model('commodity', Schema);
module.exports = Commodity;