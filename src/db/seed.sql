\c birdtracker;

INSERT INTO birds (species, description, image_url)
VALUES 
  ('Sparrow', 'A small, plump bird', 'http://example.com/sparrow.jpg'),
  ('Robin', 'A bird with a red breast', 'http://example.com/robin.jpg'),
  ('Blue Jay', 'A striking bird with blue feathers and a loud call', 'http://example.com/bluejay.jpg'),
  ('Cardinal', 'A vibrant red bird, often seen in pairs', 'http://example.com/cardinal.jpg'),
  ('Pigeon', 'A common bird in urban areas, known for its adaptability', 'http://example.com/pigeon.jpg'),
  ('Mourning Dove', 'A slender, grayish-brown bird with a soft, mournful call', 'http://example.com/mourningdove.jpg'),
  ('American Goldfinch', 'A small, bright yellow bird with black wings', 'http://example.com/goldfinch.jpg'),
  ('Red-tailed Hawk', 'A large bird of prey with a reddish-brown tail', 'http://example.com/redtailedhawk.jpg'),
  ('House Finch', 'A small bird with a red or orange face and chest', 'http://example.com/housefinch.jpg'),
  ('Northern Mockingbird', 'A gray bird known for its ability to mimic other birds', 'http://example.com/mockingbird.jpg'),
  ('American Crow', 'A large, all-black bird known for its intelligence and adaptability', 'http://example.com/americancrow.jpg'),
  ('Red-winged Blackbird', 'A blackbird with distinctive red and yellow shoulder patches', 'http://example.com/redwingedblackbird.jpg'),
  ('Baltimore Oriole', 'A bright orange and black bird often seen in parks and gardens', 'http://example.com/baltimoreoriole.jpg'),
  ('Chimney Swift', 'A small, fast-flying bird often seen darting through the sky', 'http://example.com/chimneyswift.jpg'),
  ('Great Egret', 'A large, white heron with a long neck and legs, often seen near water', 'http://example.com/greategret.jpg'),
  ('Eastern Bluebird', 'A small, vibrant blue bird with a reddish-brown chest', 'http://example.com/easternbluebird.jpg'),
  ('Tufted Titmouse', 'A small, gray bird with a tufted crest and a curious nature', 'http://example.com/tuftedtitmouse.jpg'),
  ('Downy Woodpecker', 'A small woodpecker with black and white plumage and a short bill', 'http://example.com/downywoodpecker.jpg'),
  ('Northern Cardinal', 'A bright red bird often seen in pairs', 'http://example.com/northerncardinal.jpg'),
  ('Barn Swallow', 'A small bird with a deeply forked tail and long, pointed wings', 'http://example.com/barnswallow.jpg');

INSERT INTO sightings (bird_id, location, date, time, notes, photo_url)
VALUES 
  (1, 'Central Park - The Lake', '2024-08-01', '14:00', 'Spotted near the lake', 'http://example.com/sighting1.jpg'),
  (2, 'Central Park - The Mall', '2024-08-02', '10:30', 'Nest of newborn chicks', 'http://example.com/sighting2.jpg'),
  (3, 'Central Park - Sheep Meadow', '2024-08-03', '09:15', 'Feeding on the grass', 'http://example.com/sighting3.jpg'),
  (4, 'Central Park - Strawberry Fields', '2024-08-04', '12:45', 'Perched on a tree', 'http://example.com/sighting4.jpg'),
  (5, 'Central Park - Bow Bridge', '2024-08-05', '16:30', 'Near the bridge', 'http://example.com/sighting5.jpg'),
  (6, 'Central Park - Great Lawn', '2024-08-06', '11:00', 'Singing in the trees', 'http://example.com/sighting6.jpg'),
  (7, 'Central Park - Bethesda Terrace', '2024-08-07', '13:00', 'Resting on a railing', 'http://example.com/sighting7.jpg'),
  (8, 'Central Park - The Ramble', '2024-08-08', '08:30', 'Flying between the trees', 'http://example.com/sighting8.jpg'),
  (9, 'Central Park - Turtle Pond', '2024-08-09', '15:00', 'Foraging near the pond', 'http://example.com/sighting9.jpg'),
  (10, 'Central Park - Belvedere Castle', '2024-08-10', '10:00', 'Perched on the castle', 'http://example.com/sighting10.jpg'),
  (11, 'Central Park - Conservatory Garden', '2024-08-11', '14:30', 'Near the flower beds', 'http://example.com/sighting11.jpg'),
  (12, 'Central Park - North Woods', '2024-08-12', '17:00', 'Soaring above the trees', 'http://example.com/sighting12.jpg'),
  (13, 'Central Park - Harlem Meer', '2024-08-13', '11:45', 'Perched by the water', 'http://example.com/sighting13.jpg'),
  (14, 'Central Park - Shakespeare Garden', '2024-08-14', '13:30', 'Hopping along the path', 'http://example.com/sighting14.jpg'),
  (15, 'Central Park - The Pool', '2024-08-15', '09:00', 'Flying over the water', 'http://example.com/sighting15.jpg'),
  (16, 'Central Park - Cherry Hill', '2024-08-16', '15:15', 'Resting near the fountain', 'http://example.com/sighting16.jpg'),
  (17, 'Central Park - Cedar Hill', '2024-08-17', '16:45', 'Feeding on the slope', 'http://example.com/sighting17.jpg'),
  (18, 'Central Park - The Loch', '2024-08-18', '10:30', 'Flying through the gorge', 'http://example.com/sighting18.jpg'),
  (19, 'Central Park - The Pond', '2024-08-19', '13:15', 'Spotted near the water', 'http://example.com/sighting19.jpg'),
  (20, 'Central Park - Balto Statue', '2024-08-21', '10:45', 'Perched on the statue', 'http://example.com/sighting21.jpg');