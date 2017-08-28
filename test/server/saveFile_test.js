const assert = require('assert');
const request = require('supertest');

const request4 = request('http://localhost:8080');

let server;
beforeEach(() => {
  server = require('../../server/server');
});

afterEach(() => {
  server.close();
});

describe('POST /save for CSV', function() {

  it('responds with exported CSV file', function(done) {
    const testData = [{ 
      category: 'Transportation', 
      costs: [{ 
        name: 'Cab fare', 
        price: 20, 
      }]
    }];

    request(server)
      .post('/save')
      .send(testData)
      .expect('Content-Type', /csv/)
      .expect(200, done);
  });
});
