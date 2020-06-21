import sinon from 'sinon';
import request from 'supertest';
import expect from 'chai';
import db from './db';

describe   ('GET /users/:username', ()=>{
    it('sends the correct response when a user with the username is found', async ()=>{
        const fakeData = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        };

        const stub = sinon.stub(db, 'getUserByUsername').resolves(fakeData);
        //The way sinon works is by actually replacing the getUserByUsername method of our database wrapper with a fake version

        stub.restore;
        //And calling this stub.restore here makes sure that the method is returned to normal before any other tests run
    });
});