const DB_NAME = process.env.NODE_ENV === 'test'?'TEST_DB':'PROD_DB';
import { MongoClient } from 'mongodb';
import { getUserByUsername } from './db';

export const setDatabaseData = async (collectionName, data)=>{

    const client = await MongoClient.connect(
        `mongodb://localhost:27017/${DB_NAME}`,//url of our database. TEST_DB is the name of the test database
        { //configuration object which contains few keys which are necessary for mongodb
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );

    const db = client.db(DB_NAME); //TEST_DB is the name of our test database

    await db.collection(collectionName).insertMany(data);

    client.close();

}

export const getDatabaseData = async (collectionName)=>{

    const client = await MongoClient.connect(
        `mongodb://localhost:27017/${DB_NAME}`,//url of our database. TEST_DB is the name of the test database
        { //configuration object which contains few keys which are necessary for mongodb
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );

    const db = client.db(DB_NAME); //TEST_DB is the name of our test database

    const result = await db.collection(collectionName).find().toArray();

    client.close();

    return result;

}

export const resetDatabase = async ()=>{

    const client = await MongoClient.connect(
        `mongodb://localhost:27017/${DB_NAME}`,//url of our database. TEST_DB is the name of the test database
        { //configuration object which contains few keys which are necessary for mongodb
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );

    const db = client.db(DB_NAME); //TEST_DB is the name of our test database

    await db.dropDatabase(); //reset the database

}
