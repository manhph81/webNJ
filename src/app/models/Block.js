const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Blocks = new Schema({
    nonce: { type: Number, index: true },
    data: { type: String},
    preid: { type: String },
    slug: { type: String, slug: 'data', unique : true }
});

module.exports = mongoose.model('Block', Blocks)