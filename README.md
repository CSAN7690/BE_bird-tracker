# 🦅  BIRD TRACKER BACKEND

This is the backend for a bird tracker application for rehabilitation tracking birds they helped and new ones.

## Installation 
1. Clone the repo: 
``` git clone https://github.com/username/BE_bird-tracker.git ```
``` cd BE_bird-tracker ```

2. Install dependencies:
``` npm install``

3. Setup environment variables. Create a '.env' file in the root directory and add your db connection details:

4. Set up the database: 
```npm run db:init```
```npm run db:seed```

5. Start the server:
```npm start```

# Check on POSTMAN

## API Endpoints

### Birds
- **Get all birds:** `GET /birds`
- **Get a single bird:** `GET /birds/:id`
- **Create a new bird:** `POST /birds`
- **Update a bird:** `PUT /birds/:id`
- **Delete a bird:** `DELETE /birds/:id`

### Sightings
- **Get all sightings:** `GET /sightings`
- **Get a single sighting:** `GET /sightings/:id`
- **Create a new sighting:** `POST /sightings`
- **Update a sighting:** `PUT /sightings/:id`
- **Delete a sighting:** `DELETE /sightings/:id`

## Example Requests using POSTMAN

### Get all birds 🦅
- **Method:** GET
- **URL:** `http://localhost:5001/birds`

### Get a single bird 🦅
- **Method:** GET
- **URL:** `http://localhost:5001/birds/1`

### Create a new bird 🦅
- **Method:** POST
- **URL:** `http://localhost:5001/birds`
- **Body (JSON):**
  ```json
  {
    "species": "Blue Jay",
    "description": "A vibrant blue bird",
    "image_url": "http://example.com/bluejay.jpg"
  }

### Create a new bird 🦅
- **Method:** PUT
- **URL:** `http://localhost:5001/birds/1`
- **Body (JSON):**
  ```json
  {
    "species": "Blue Jay",
    "description": "A vibrant blue bird",
    "image_url": "http://example.com/bluejay.jpg"
  }

### Delete a bird 🦅
- **Method:** DELETE
- **URL:** `http://localhost:5001/birds/1`


### Get all sightings 📍
- **Method:** GET
- **URL:** `http://localhost:5001/sightings`

### Get a single sighting 📍
- **Method:** GET
- **URL:** `http://localhost:5001/sightings/1`

### Create a new sighting 📍
- **Method:** POST
- **URL:** `http://localhost:5001/sightings`
- **Body (JSON):**
  ```json
  {
    "bird_id": 1,
    "location": "Central Park",
    "date": "2024-08-01",
    "time": "14:00",
    "notes": "Healthy and active",
    "photo_url": "http://example.com/sighting.jpg"
  }

### Update a sighting 📍
- **Method:** PUT
- **URL:** `http://localhost:5001/sightings/1`
- **Body (JSON):**
  ```json
  {
    "bird_id": 1,
    "location": "Central Park",
    "date": "2024-08-01",
    "time": "14:30",
    "notes": "Flying high",
    "photo_url": "http://example.com/sighting.jpg"
  }

### Delete a sighting 📍
- **Method:** DELETE
- **URL:** `http://localhost:5001/sightings/1`
- **Body (JSON):**
  ```json
  {
    "bird_id": 1,
    "location": "Central Park",
    "date": "2024-08-01",
    "time": "14:30",
    "notes": "Flying high",
    "photo_url": "http://example.com/sighting.jpg"
  }

  Following these steps on POSTMAN should allow you to check the endpoints and make sure CRUD is functional 🤓