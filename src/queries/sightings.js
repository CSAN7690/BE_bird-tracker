const db = require('../db/dbConfig');

// Get ALL sightings with species name 
const getAllSightings = async () => {
    try {
        return await db.any(`
            SELECT sightings.*, birds.species, birds.image_url
            FROM sightings
            JOIN birds ON sightings.bird_id = birds.bird_id
        `);
    } catch (err) {
        throw err;
    }
};

// Get SINGLE sighting with speicies name
const getSightingById = async (id) => {
    try {
        return await db.one(`
            SELECT sightings.*, birds.species, bird.image_url
            FROM sightings
            JOIN birds ON sightings.bird_id = birds.id
            WHERE sightings.sighting_id = $1
        `, id);
    } catch (err) {
        throw err;
    }
};

/// Create a new sighting and return species name
const createSighting = async (sighting) => {
    const { bird_id, location, date, time, notes, photo_url } = sighting;
    try {
        return await db.one(`
            INSERT INTO sightings (bird_id, location, date, time, notes, photo_url)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING sightings.*, birds.species, birds.image_url
            FROM sightings
            JOIN birds ON sightings.bird_id = birds.id
        `, [bird_id, location, date, time, notes, photo_url]);
    } catch (err) {
        throw err;
    }
};

// UPDATE an existing sighting and return species name
const updateSighting = async (id, sighting) => {
    const { bird_id, location, date, time, notes, photo_url } = sighting;
    try {
        return await db.one(`
            UPDATE sightings
            SET bird_id = $1, location = $2, date = $3, time = $4, notes = $5, photo_url = $6
            WHERE sighting_id = $7
            RETURNING sightings.*, birds.species, birds.image_url
            FROM sightings
            JOIN birds ON sightings.bird_id = birds.id
        `, [bird_id, location, date, time, notes, photo_url, id]);
    } catch (err) {
        throw err;
    }
};

// Delete sighting
const deleteSighting = async (id) => {
    try {
        return await db.none('DELETE FROM sightings WHERE sighting_id = $1', id);
    } catch (err) {
        throw err;
    }
};

module.exports = { getAllSightings, getSightingById, createSighting, updateSighting, deleteSighting };
