\c birdtracker;

INSERT INTO birds (species, description, image_url)
VALUES 
  ('Sparrow', 'A small, plump bird', 'http://example.com/sparrow.jpg'),
  ('Robin', 'A bird with a red breast', 'http://example.com/robin.jpg');

INSERT INTO sightings (bird_id, location, date, time, notes, photo_url)
VALUES 
  (1, 'Central Park', '2024-08-01', '14:00', 'Spotted near the lake', 'http://example.com/sighting1.jpg'),
  (2, 'Empire State Building', '2024-08-02', '10:30', 'Nest of newborn chicks', 'http://example.com/sighting2.jpg');
