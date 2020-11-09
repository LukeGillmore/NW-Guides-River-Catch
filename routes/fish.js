const Fish = require('../database/schemas/fishSchema');
const express = require('express');
const router = express.Router({mergeParams: true});


router.get('/', async (req, res) => {

    try {
        const species = await Fish.find({}, {_id: 0});
        res.statusCode = 200;
        res.send(species);

    } catch (err){
        res.send({ message: err.message });
    }
});

router.get('/:fish', async(req, res) => {
     const { fish } = req.params;
    
    try {
        const species = await Fish.findOne({"species" : fish});
        res.statusCode = 200;
        res.send(species);

    } catch (err){
        res.send({ message: err.message });
    }
});


module.exports = router; 