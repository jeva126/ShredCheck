import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import {Mountain} from './schema';

let mongod;
let mountain1, mountain2, mountain3;

/**
 * Before all tests, create an in-memory MongoDB instance so we don't have to test on a real database,
 * then establish a mongoose connection to it.
 */
beforeAll(async () => {

    mongod = new MongoMemoryServer();

    const connectionString = await mongod.getUri();
    await mongoose.connect(connectionString, { useNewUrlParser: true });

});

/**
 * Before each test, intialize the database with some data
 */
beforeEach(async () => {
    const coll = await mongoose.connection.db.createCollection('mountains');

    mountain1 = {
        Name: 'Jaimee',
        Description: 'is cool.',
        Location:{
            Longitude: 	'42',
   	        Latitude: 	'52',
   	        Elevation:  '10000'
        }
   
    };

    mountain2 = {
        Name: 'Mt Mountain',
        Description: 'this is a mountain.',
        Location:{
            Longitude: 	'1',
   	        Latitude: 	'2',
   	        Elevation:  '3'
        }
    };

    mountain3 = {
        Name: 'Mt Tallest',
        Description: 'The tallest Mountain.',
        Location:{
            Longitude: 	'100',
   	        Latitude: 	'200',
   	        Elevation:  '50,000'
        }
    };

    await coll.insertMany([mountain1, mountain2, mountain3]);
});

/**
 * After each test, clear the database entirely
 */
afterEach(async () => {
    await mongoose.connection.db.dropCollection('mountains');
});

/**
 * After all tests, gracefully terminate the in-memory MongoDB instance and mongoose connection.
 */
afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
});

it('gets mountains', async () => {

    const mountains = await Mountain.find();
    expect(mountains).toBeTruthy();
    expect(mountains.length).toBe(3);

    expect(mountains[0].Name).toBe('Jaimee');
    expect(mountains[0].Description).toBe('is cool.');
    expect(mountains[0].Location.Longitude).toBe('42');

    expect(mountains[1].Name).toBe('Mt Mountain');
    expect(mountains[1].Description).toBe('this is a mountain.');
    expect(mountains[1].Location.Latitude).toBe('2');

    expect(mountains[2].Name).toBe('Mt Tallest');
    expect(mountains[2].Description).toBe('The tallest Mountain.');
    expect(mountains[2].Location.Elevation).toBe('50,000');
});

it('gets a single mountain', async () => {
    const mountain = await Mountain.findById(mountain2._id);
    expect(mountain.Name).toBe('Mt Mountain');
    expect(mountain.Description).toBe('this is a mountain.');
    expect(mountain.Location.Longitude).toBe('1');
});

it('adds a mountain without crashing', async () => {
    const mountain = new Mountain({
        Name: 'created',
        Description: 'created successfully',
        Location:{
            Longitude: 	'100',
   	        Latitude: 	'200',
   	        Elevation:  '50,000'
        }
    });

    await mountain.save();

    const fromDb = await mongoose.connection.db.collection('mountains').findOne({ _id: mountain._id });
    expect(fromDb).toBeTruthy();
    expect(fromDb.Name).toBe('created');
    expect(fromDb.Description).toBe('created successfully');
    expect(fromDb.Location.Longitude).toBe('100');
});


it('fails when adding an incorrect kind of name', () => {
    const mountain = new Mountain({
        Name: null,
        Description: 'incorrect name',
        Location:{
            Longitude: 	'100',
   	        Latitude: 	'200',
   	        Elevation:  '50,000'
        }
    });

    return expect(mountain.save()).rejects.toThrow();
});
