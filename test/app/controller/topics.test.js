'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/topics.test.js', () => {
  it('should GET /', () => {
    return app.httpRequest()
      .get('/api/v2/topics')
      .expect(200);
  });
  it('should POST /', () => {
    return app.httpRequest()
      .post('/api/v2/topics')
      .send({
        a: 'aaa',
        b: 'bbb',
        c: 'ccc',
      })
      .expect(200)
      .expect({ data: {
        a: 'aaa',
        b: 'bbb',
        c: 'ccc',
      }});
  });
});
