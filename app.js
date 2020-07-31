import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './route/index'
import dotenv from 'dotenv'
import mongoDriver from './Driver/mongoDB'
import morgan from 'morgan'
import path from 'path'
const app = express()
dotenv.config({path:'./config/config.env'})

console.log(process.env.NODE_ENV)
console.log(path.join(__dirname,'./Client/build'))

mongoDriver()

app.use(bodyParser.json())

app.use(cors());

app.use('/',router)

if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

if(process.env.NODE_ENV == 'production') {

    app.use(express.static(path.join(__dirname,'./Client/node-build')))

    app.get('*',(req,res) => { res.sendFile(path.join(__dirname,'./Client/node-build/index.html')) })

}




export default app