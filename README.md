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

### Start up Program:
1. In a new terminal.
2. ```npm run install-full```
3. ```npm run start-backend```
4. Without closing the last, open a new terminal.
5. ```npn run start-frontend```
6. Watch it come alive.

## Conceptual Designs 
![image](https://user-images.githubusercontent.com/63177740/117566393-8723ed00-b10a-11eb-9c04-68808bb23b6d.png)
![image](https://user-images.githubusercontent.com/63177740/117566020-69ee1f00-b108-11eb-93c0-1ec15ddf298a.png)

