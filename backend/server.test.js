const request = require('supertest');
const express = require('express');
const app = express();

// Import your actual app setup
require('./server');

describe('API Endpoints', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
  });
}); 