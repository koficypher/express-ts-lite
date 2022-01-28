import createServer from './kernel/server'
import { AddressInfo } from 'net'
import http from 'http'
import config from './config'
import { logger } from './services/logger'

const host = process.env.HOST || '0.0.0.0'
const port  = process.env.PORT || '5000'

const startServer = async () => {

    const app = await createServer()

    console.log(config)

    const server = http.createServer(app).listen({host, port}, () => {
       const addressInfo = server.address() as AddressInfo

       logger.info(
           `Server ready at http://${addressInfo.address}:${addressInfo.port}`
       )
    })
    
   // const signalTraps: NodeJS.Signals[] = ['SIGTERM', 'SIGINT', 'SIGUSR2', 'SIGKILL']

    // signalTraps.forEach((type) => {

    //     process.once(type, async () => {
    //         logger.info(`process.once ${type}`)
    //     })

    //     server.close(() => {
    //         logger.debug('HTTP Server closed!')
    //        // process.exit(0);
    //     })

    // })

}

startServer()