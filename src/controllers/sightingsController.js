const express = require('express');
const router = express.Router();
const sightingQueries = require('../queries/sightings');

router.get('/', async (req, res) => {
    try {
        const sightings = await sightingQueries.getAllSightings();
        res.status(200).json(sightings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const sighting = await sightingQueries.getSightingById(req.params.id);
        if (!sighting) return res.status(404).json({ error: 'Sighting not found' });
        res.status(200).json(sighting);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const sighting = await sightingQueries.createSighting(req.body);
        res.status(201).json(sighting);
    } catch (err) {
        console.error("Error creating sighting:", err);
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { notes } = req.body;

    try {
        const updatedSighting = await sightingQueries.updateSighting(id, { notes });
        res.status(200).json(updatedSighting);
    } catch (err) {
        console.error('Error updating sighting:', err);  // Log the error
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await sightingQueries.deleteSighting(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
