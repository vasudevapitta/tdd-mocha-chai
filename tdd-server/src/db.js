import { MongoClient } from 'mongodb';

const DB_NAME = process.env.NODE_ENV === 'test'?'TEST_DB':'PROD_DB';

export const getUserByUsername = async (username) => {

    const client = await MongoClient.connect(
        `mongodb://localhost:27017/${DB_NAME}`,//url of our database. TEST_DB is the name of the test database
        { //configuration object which contains few keys which are necessary for mongodb
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );

    const db = client.db(DB_NAME); //TEST_DB is the name of our test database

    const result = await db.collection('users').findOne({username});

    client.close();

    return result;

}