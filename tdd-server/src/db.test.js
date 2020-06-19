import { MongoClient } from 'mongodb';
import {expect} from 'chai';
import { getUserByUsername } from './db';

const DB_NAME = process.env.NODE_ENV === 'test'?'TEST_DB':'PROD_DB';

describe('getUserByUsername', ()=>{
    it('get the correct user from the database given a username', async ()=>{
        const client = await MongoClient.connect(
            `mongodb://localhost:27017/${DB_NAME}`,//url of our database. TEST_DB is the name of the test database
            { //configuration object which contains few keys which are necessary for mongodb
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        const db = client.db(DB_NAME); //TEST_DB is the name of our test database

        //tests
        const fakeData = [{
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        }, {
            id: '124',
            username: 'wrong',
            email: 'wrong@wrong.com',
        }
        ];

        await db.collection('users').insertMany(fakeData);

        const actual = await getUserByUsername('abc');

        const finalDBState = await db.collection('users').find().toArray();

        await db.dropDatabase(); //reset the database

        client.close();

        const expected = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        };

        expect(actual).excludingEvery('_id').to.deep.equal(expected);

        expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData); //check final database state is the same as the initial data inserted into the database to make sure the getUserByUsername function didn't harm it in anyway
        
    });
})