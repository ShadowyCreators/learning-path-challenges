import request from 'supertest'
import { expect } from 'chai'
import express from 'express';
import * as dotenv from 'dotenv'
import mongoose, { model, Schema } from 'mongoose'
import { exit } from 'process';

/**
 * DO NOT TOUCH THIS PART
 */

dotenv.config()

if (!process.env.MONGOOSE_CONNECTION_STRING) {
    console.log('You need to provide a `MONGOOSE_CONNECTION_STRING` in your .env file.')
    exit(1)
}

mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING as string)
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB.'))
    .on('error', (error: any) => console.error(`Error thrown by Mongoose: ${error.toString()}`))

const app = express();

/**
 * END
 */

/**
 * Exercise 1:
 * 
 * Define the basic interface for our Contracts that will be saved on MongoDB.
 * Each contract has an address (string), a name (string) and an ABI (list of objects).
 */
interface IContract {
    // TODO: define here
}

/**
 * Exercise 2:
 * 
 * Define the contract schema and model that will be saved into MongoDB.
 * NOTE: make sure to use the interface above! 
 */
const contractSchema = new Schema<unknown>({
    // TODO: add here
})

const Contract = model<unknown>('unknown', contractSchema)

/** Exercise 3:
 * 
 * Define the following APIs:
 * - GET /: returns all the contracts available
 * - GET /:address : returnss the contract with the given address, returns 404 if not found
 */
app.get('/', (req: unknown, res: unknown) => {
    // TODO: complete this function
})


app.get('/:address', (req: unknown, res: unknown) => {
    // TODO: complete this function
})

describe('[Backend] Level 3', () => {
    beforeEach(async (done) => {
        await mongoose.connection.collections.contracts.deleteMany({})
        done();
    })
    it('[Exercise 3a] GET / should return a list of contracts', async () => {
        const contract = new Contract({ name: 'test', address: 'test123', abi: [{ functionName: "testFunction" }]});
        await contract.save();
        const contract2 = new Contract({ name: 'test2', address: 'test456', abi: [{ functionName: "testFunction2" }]});
        await contract2.save();
        const res = await request(app).get('/').expect(200)
        expect(res.body).eql([contract, contract2])
    })
    it('[Exercise 3b] GET /:address should return a given contract or 404', async () => {
        const contract = new Contract({ name: 'test', address: 'test123', abi: [{ functionName: "testFunction" }]});
        await contract.save();
        const res = await request(app).get('/test123').expect(200)
        expect(res.body).eql(contract)
        await request(app).get('/test789').expect(404)
    })
})