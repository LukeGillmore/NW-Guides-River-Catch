const mongoose = require('mongoose');

const riverSchema = new mongoose.Schema({
    name : {
        require: true,
        type: String
    }
}, {timestamps: true, collection: 'river'});

const River = mongoose.model('River', riverSchema);

module.exports = River; 