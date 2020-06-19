
import {expect} from 'chai';
import { getUserByUsername } from './db';
import { setDatabaseData, getDatabaseData, resetDatabase } from './test-helpers';

const DB_NAME = process.env.NODE_ENV === 'test'?'TEST_DB':'PROD_DB';

describe('getUserByUsername', ()=>{
    it('get the correct user from the database given a username', async ()=>{

        const collection = 'users';

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

        await setDatabaseData(collection, fakeData);


        const actual = await getUserByUsername('abc');

        const finalDBState = await getDatabaseData(collection);

        await resetDatabase();

        const expected = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        };

        expect(actual).excludingEvery('_id').to.deep.equal(expected);

        expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData); //check final database state is the same as the initial data inserted into the database to make sure the getUserByUsername function didn't harm it in anyway
        
    });
})