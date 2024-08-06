\c birdtracker;

DROP TABLE IF EXISTS sightings;
DROP TABLE IF EXISTS birds;

CREATE TABLE IF NOT EXISTS birds (
  bird_id SERIAL PRIMARY KEY,
  species TEXT NOT NULL,
  description TEXT,
  image_url TEXT
);

CREATE TABLE IF NOT EXISTS sightings (
  sighting_id SERIAL PRIMARY KEY,
  bird_id INT REFERENCES birds(bird_id),
  location TEXT NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  notes TEXT,
  photo_url TEXT
);
