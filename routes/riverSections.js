const RiverSection = require('../database/schemas/riverSectionSchema');
const express = require('express');
const router = express.Router({mergeParams: true});


router.get('/', async (req, res) => {
    console.log('river section')
    try {
        const sections = await RiverSection.find({}, {_id: 0});
        res.send(sections);

    } catch (err){
        res.send({ message: err.message });
    }
});


module.exports = router; 