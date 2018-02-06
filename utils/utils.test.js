const request = require('supertest');
const expect = require('expect');
const testData=require('./data.test').testData;

var app =require('../server').app;

it('should return a valid json', (done) => {
request(app)
  .post('/')
  .send(testData)
  .expect(200)
  .expect('Content-Type', /json/)
  .end(done);
});
