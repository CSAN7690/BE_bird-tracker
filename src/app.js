const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const birdsController = require('./controllers/birdsController');
const sightingsController = require('./controllers/sightingsController');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/birds', birdsController);
app.use('/sightings', sightingsController);

// Handle 404 for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

module.exports = app;
