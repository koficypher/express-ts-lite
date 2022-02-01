import request from 'supertest'
// import { Express } from 'express-serve-static-core'
import createServer from '../../../src/kernel/server'

// let server: Express

// beforeAll(async () => {
//   server = await createServer()
// })

describe('Server', () => {

    const app =  createServer()

    it('should pass', (done) => {

        request(app).get('/health').expect({
            "status": "success",
            "message": "all systems green"
        }, done)

    })
})
