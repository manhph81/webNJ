const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blocks = new Schema({
    nonce: { type: Number, min: 18, index: true },
    data: { type: String,maxlength: 255, default: 'hahaha'},
    preid: { type: String, maxlength: 26 },
    date: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Block', Blocks)