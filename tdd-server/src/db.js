import { MongoClient } from 'mongodb';

export const getUserByUsername = async (username) => {

    const client = await MongoClient.connect(
        `mongodb://localhost:27017/TEST_DB`,//url of our database. TEST_DB is the name of the test database
        { //configuration object which contains few keys which are necessary for mongodb
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );

    const db = client.db('TEST_DB'); //TEST_DB is the name of our test database

    const result = await db.collection('users').findOne({username});

    client.close();

    return result

}