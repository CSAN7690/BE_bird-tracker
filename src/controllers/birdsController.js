const express = require('express');
const router = express.Router();
const birdQueries = require('../queries/birds');

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

module.exports = router;
