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
            JOIN birds ON sightings.bird_id = birds.bird_id
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
        // Insert the sighting and return the inserted row
        const insertedSighting = await db.one(`
            INSERT INTO sightings (bird_id, location, date, time, notes, photo_url)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `, [bird_id, location, date, time, notes, photo_url]);

        // Fetch the species and image_url from the birds table based on bird_id
        const sightingWithDetails = await db.one(`
            SELECT sightings.*, birds.species, birds.image_url
            FROM sightings
            JOIN birds ON sightings.bird_id = birds.bird_id
            WHERE sightings.sighting_id = $1;
        `, [insertedSighting.sighting_id]);

        return sightingWithDetails;
    } catch (err) {
        throw err;
    }
};

// UPDATE an existing sighting and return species name
const updateSighting = async (id, { notes }) => {
    try {
        const updatedSighting = await db.one(`
            UPDATE sightings
            SET notes = $1
            WHERE sighting_id = $2
            RETURNING *;
        `, [notes, id]);

        return updatedSighting;
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
