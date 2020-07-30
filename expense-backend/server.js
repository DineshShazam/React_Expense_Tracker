import app from './app'
import colors from 'colors'
import dotenv from 'dotenv'
dotenv.config({path:'./config/config.env'})

app.listen(process.env.PORT,console.log(`Application running in ${process.env.PORT}`.white.bold))