import sinon from 'sinon';
import request from 'supertest';
import { expect } from 'chai';
import db from './db';
import { app } from './server';

describe   ('GET /users/:username', ()=>{
    it('sends the correct response when a user with the username is found', async ()=>{
        const fakeData = {
            id: '123',
            username: 'abc',
            email: 'abc@gmail.com',
        };

        const stub = sinon.stub(db, 'getUserByUsername').resolves(fakeData);
        //The way sinon works is by actually replacing the getUserByUsername method of our database wrapper with a fake version

        await request(app).get('/users/abc')
        .expect(200) //status code
        .expect('Content-Type', /json/) //content type header
        .expect(fakeData); //response body

        expect(stub.getCall(0).args[0]).to.equal('abc');

        stub.restore();
        //And calling this stub.restore here makes sure that the method is returned to normal before any other tests run
    });

    it('sends a correct response when there is an error', async ()=>{
        const fakeError = {message: 'Something went wrong!'};

        const stub = sinon.stub(db, 'getUserByUsername')
        .throws(fakeError);

        await request(app).get('/users/abc')
        .expect(500)
        .expect('Content-Type', /json/)
        .expect(fakeError);

        stub.restore();
    });

    it('returns the appropriate response when the user is not found', async ()=>{
        const stub = sinon.stub(db, 'getUserByUsername').resolves(null);

        await request(app).get('/users/test')
        .expect(404);

        stub.restore();
    });
});