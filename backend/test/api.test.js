import request from 'supertest';
import { expect } from 'chai'; // Use named import
import app from '../server.js'; // Ensure correct path to server.js

describe('API Integration Tests', () => {
  it('TC005: Should fetch all media', async () => {
    const response = await request(app)
      .get('/api/browseMedia')
      .query({ genres: '[]', types: '[]', sort: 'Default' });
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });
  
  it('TC006: Should fetch specific media by ID', async () => {
    const mediaID = 1; // Replace with a valid media ID from your database
    const response = await request(app).get('/api/specificMedia').query({ mediaID });
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body[0]).to.have.property('media_ID', mediaID);
  });

  it('TC007: Should fetch media matching a keyword', async () => {
    const searchTerm = 'Title'; // Replace with a valid keyword
    const response = await request(app).get('/api/searchMedia').query({ searchTerm });
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    response.body.forEach((item) => {
      expect(
        item.title.includes(searchTerm) ||
        item.author.includes(searchTerm) ||
        item.genre.includes(searchTerm)
      ).to.be.true;
    });
  });
});
