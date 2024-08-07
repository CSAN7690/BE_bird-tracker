const express = require('express');
const axios = require('axios');
const router = express.Router();
const birdQueries = require('../queries/birds');

// CRUD operations for the birds table
router.get('/', async (req, res) => {
    try {
        const birds = await birdQueries.getAllBirds();
        res.status(200).json(birds);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const bird = await birdQueries.getBirdById(req.params.id);
        if (!bird) return res.status(404).json({ error: 'Bird not found' });
        res.status(200).json(bird);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const bird = await birdQueries.createBird(req.body);
        res.status(201).json(bird);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const bird = await birdQueries.updateBird(req.params.id, req.body);
        res.status(200).json(bird);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await birdQueries.deleteBird(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to fetch bird species from Wikipedia API
router.get('/external', async (req, res) => {
    const birdSpecies = ["Sparrow", "Robin", "Pigeon", "Eagle", "Parrot"];
    try {
        const promises = birdSpecies.map(async species => {
            const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(species)}`);
            if (response.data.type === 'disambiguation') {
                return null;
            }
            return {
                bird_id: species.toLowerCase(),
                species: species,
                description: response.data.extract,
                image_url: response.data.thumbnail ? response.data.thumbnail.source : ''
            };
        });
        const birds = (await Promise.all(promises)).filter(bird => bird !== null);
        res.status(200).json(birds);
    } catch (err) {
        console.error("Error fetching birds from Wikipedia API:", err.response ? err.response.data : err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
