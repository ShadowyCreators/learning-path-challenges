import request from 'supertest'
import { expect } from 'chai'
import express from 'express';

const app = express();

/**
 * Exercise 1:
 * 
 * Define a basic GET `/` API that returns 'Hello World!' as a string and returns 200 as a status code.
 * You must type everything accordingly.
 */

app.get('/', (req: unknown, res: unknown) => {
    // TODO: complete this function
})

/**
 * Exercise 2:
 * 
 * - Define a middleware that checks if the 'x-shadowy-user' is provided and adds it to the request.
 *   If it's not present, it must return 403.
 * - Define a route `/protected` that returns the value of the 'x-shadowy-user' header.
 */
const authMiddleware = (req: unknown, res: unknown, next: unknown) => {
    // TODO: complete this function
}

app.get('/protected', authMiddleware,  async (req: unknown, res: unknown) => {
    // TODO: complete this function
})

describe('[Backend] Level 2', () => {
    it('[Exercise 1] GET / should return "Hello World!"', async () => {
        const res = await request(app).get('/').expect(200)
        expect(res.text).equal('Hello World!')
    })
    it('[Exercise 2a] GET /protected should return 403 status code when `x-shadowy-user` is not provided.', async () => {
        await request(app).get('/protected').expect(403)
    })
    it('[Exercise 2b] GET /protected should return the `x-shadowy-user` header value.', async () => {
        const res = await request(app).get('/protected').set('x-shadowy-user', 'shadower').expect(200)
        expect(res.text).equal('shadower')
    })
})