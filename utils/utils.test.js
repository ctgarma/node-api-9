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

it('should return a json with drm equal to true', (done) => {
request(app)
  .post('/')
  .send(testData)
  .expect(200)
  .expect('Content-Type', /json/)
  .expect((res)=>{
    var arr = res.body.response;
    var arr = arr.filter(arr => arr.drm != true);
    expect(arr.length==0);
  }).end(done);
});

it('should return a json with episodecount > 0', (done) => {
request(app)
  .post('/')
  .send(testData)
  .expect(200)
  .expect('Content-Type', /json/)
  .expect((res)=>{
    var arr = res.body.response;
    var arr = arr.filter(arr => arr.episodeCount <= 0);
    expect(arr.length==0);
  }).end(done);
});
