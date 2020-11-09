const Catch = require('../database/schemas/catchSchema');
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    console.log('Getting all Catches')
    try {
        const catches = await Catch.find({}, {_id: 0});
        // res.statusCode = 200;
        res.send(catches);

    } catch (err){
        res.send({ message: err.message });
    }
});


router.get('/catches/:fish/:river/:riverSection', async(req, res) => {
     const { fish, river, riverSection } = req.params;
    
    try {
        const catches = await Catch.find(
                                    {
                                        "species" : fish,
                                        "river": river, 
                                        "riverSection": riverSection
                                    });
        res.statusCode = 200;
        res.send(catches);

    } catch (err){
        res.send({ message: err.message });
    }
});


router.get('/catches/fish/:fish', async (req, res) => {
    const { fish } = req.params;
    try {
        const catches = await Catch.find({"species": fish})
        res.statusCode = 200; 
        res.send(catches);

    } catch (err) {
        res.send({ message : err.message});
    }
});


router.get('/catches/river/:river', async (req, res) => {
    const { river } = req.params;
    try {
        const catches = await Catch.find({"river": river})
        res.statusCode = 200; 
        res.send(catches);

    } catch (err) {
        res.send({ message : err.message});
    }
});


router.post('/record' , async (req, res) => {

    const { river, riverSection, fish, quanity, isWild  } = req.body; 
    const coughtFish = new Catch({
        species: fish, 
        river: river, 
        riverSection: riverSection,
        quanity: quanity,
        isWild: isWild
    });

    try {
        const newCatch = await coughtFish.save();
        res.status(201).json(newCatch);

    } catch (err) {
        res.status(400).json({ message : err.message});
    }
});


module.exports = router; 