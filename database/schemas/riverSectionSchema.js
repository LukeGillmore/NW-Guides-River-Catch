const mongoose = require('mongoose');

const riverSectionSchema = new mongoose.Schema({
    name : {
        require: true,
        type: String
    }
}, {timestamps: true, collection: 'riverSection'});

const RiverSection = mongoose.model('RiverSection', riverSectionSchema);

module.exports = RiverSection; 