const River = require('../database/schemas/riversSchema');
const express = require('express');
const router = express.Router({mergeParams: true});


router.get('/', async (req, res) => {
    console.log('river ')
    try {
        const rivers = await River.find({}, {_id: 0});
        res.send(rivers);

    } catch (err){
        res.send({ message: err.message });
    }
});

module.exports = router; 