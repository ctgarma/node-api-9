const request = require('supertest');
const expect = require('expect');
const testData = require('./data.test').testData;

var app = require('../server').app;

it('should return a valid json', (done) => {
  request(app)
    .post('/')
    .send(testData)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(done);
});

it('should return a response with the following fields: image, slug and title ', (done) => {
  request(app)
    .post('/')
    .send(testData)
    .expect(200)
    .expect('Content-Type', /json/)
    .expect((res) => {
      var arr = res.body.response;
      for (i = 0; i < arr.length; i++) {
        var KeyCount = Object.keys(arr[0]).length;
        if (((KeyCount == 3) && arr[i].hasOwnProperty('slug') &&
            arr[i].hasOwnProperty('image') &&
            arr[i].hasOwnProperty('title')) == false) {
          throw new Error('some fields are missing');
        }
      }
    }).end(done);
});
