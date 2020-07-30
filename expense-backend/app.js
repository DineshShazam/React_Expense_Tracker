import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './route/index'
import mongoDriver from './Driver/mongoDB'
const app = express()


mongoDriver()

app.use(bodyParser.json())

app.use(cors());

app.use('/',router)






export default app