# ShredCheck

Shred check is your all in one location for planning a ski holiday.   
Here you will be able to check, prices, field status, weather and more.

## Backend
Follow [this doc](https://docs.mongodb.com/manual/administration/install-community/) to install MongoDB community and get your local server running.   
Make sure you have [brew](brew.sh) installed.

### To set up the database: 
1. download MongoDB Compass desktop app (for easy use)
2. connect to local db ```localhost: 27017``` , It should be the default
3. click 'create database' call it 'ShredCheck' and call the collection 'mountains' (case is important)
4. click 'ADD DATA' and import file ```Mountains.json```

### Start up backend:
1. In a new terminal after setting up the backend.
2. ```cd backend```
3. ```npm install```
4. ```npm start```
5. Watch it come alive.

## Frontend
### Start up frontend:
1. In a new terminal after setting up the backend.
2. ```cd frontend```
3. ```npm install```
4. ```npm start```
5. Watch it come alive.
