const mongoose = require('mongoose');

const catchSchema = new mongoose.Schema({

    species: {
        type: String,
        require: true
    },
    river: {
        type: String, 
        require: true
    },
    riverSection: {
        type: String, 
        require: true
    },
    quanity: {
        type: Number,
        require: true,
    },
    isWild : {
        type: Boolean,
        require: true 
    }

}, { timestamps: true, collection: 'catch' });

const Catch = mongoose.model("Catch", catchSchema);

module.exports = Catch; 