import { MongoClient } from 'mongodb';
import {expect} from 'chai';
import { getUserByUsername } from './db';

describe('getUserByUsername', ()=>{
    it('get the correct user from the database given a username', async ()=>{
        const client = await MongoClient.connect(
            `mongodb://localhost:27017/TEST_DB`,//url of our database. TEST_DB is the name of the test database
            { //configuration object which contains few keys which are necessary for mongodb
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        const db = client.db('TEST_DB'); //TEST_DB is the name of our test database

        //tests
        
        client.close();
    });
})