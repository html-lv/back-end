import http from 'http'
import express, { Express } from 'express'

import * as employeeController from './controllers/controller'

const router: Express = express();


router.use('', 
    employeeController.default
)

const httpServer = http.createServer(router)

httpServer.listen(6600, () => {
    console.log("Server is running on port 6600")
})