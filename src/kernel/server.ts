import express from 'express'
import cors from 'cors'
import  errorHandler from '../middlewares/errorHandler'

const createServer = (): express.Application => {

    const app = express()

    app.use(express.urlencoded({ extended: true }))
    app.use(cors())
    app.use(express.json())
  
    app.disable('x-powered-by')

    app.get('/health', (_req, res) => {
       res.send({
           "status": "success",
           "message": "all systems green"
       })
    })

    app.use(errorHandler)

    return app
}

export default createServer