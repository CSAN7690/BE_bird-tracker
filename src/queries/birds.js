const db = require('../db/dbConfig');

const getAllBirds = async () => {
    try {
        return await db.any('SELECT * FROM birds');
    } catch (err) {
        throw err;
    }
};

const getBirdById = async (id) => {
    try {
        return await db.one('SELECT * FROM birds WHERE bird_id = $1', id);
    } catch (err) {
        throw err;
    }
};

const createBird = async (bird) => {
    const { species, description, image_url } = bird;
    try {
        return await db.one(
            'INSERT INTO birds (species, description, image_url) VALUES ($1, $2, $3) RETURNING *',
            [species, description, image_url]
        );
    } catch (err) {
        throw err;
    }
};

const updateBird = async (id, bird) => {
    const { species, description, image_url } = bird;
    try {
        return await db.one(
            'UPDATE birds SET species = $1, description = $2, image_url = $3 WHERE bird_id = $4 RETURNING *',
            [species, description, image_url, id]
        );
    } catch (err) {
        throw err;
    }
};

const deleteBird = async (id) => {
    try {
        return await db.none('DELETE FROM birds WHERE bird_id = $1', id);
    } catch (err) {
        throw err;
    }
};

module.exports = { getAllBirds, getBirdById, createBird, updateBird, deleteBird };
