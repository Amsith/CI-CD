const request = require('supertest');
const {app, server, name } = require('../app')

describe('GET /', () => {
    it("should return 200 status and the correct message", async() => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.text).toBe(`Welcome to ShopEasy from ${name}!`);
    })
})
afterAll(() => {
    server.close();
})


//===== Real data geting from db
// const request = require('supertest');
// const { app } = require('../app'); // your Express app

// describe('GET /items', () => {
//   it('should return existing items from the database', async () => {
//     const res = await request(app).get('/items');

//     expect(res.statusCode).toBe(200);
//     expect(Array.isArray(res.body)).toBe(true);
//     expect(res.body.length).toBeGreaterThan(0); // at least some data

//     // Example: check the first item has required fields
//     expect(res.body[0]).toHaveProperty('name');
//     expect(res.body[0]).toHaveProperty('price');
//   });
// });










