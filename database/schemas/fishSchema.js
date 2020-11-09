const mongoose = require("mongoose");

const fishSchema = new mongoose.Schema({

    species : {
        type: String, 
        require: true
    }

}, { timestamps: true, collection: 'species' });

const Fish = mongoose.model("Fish", fishSchema);

module.exports = Fish; 