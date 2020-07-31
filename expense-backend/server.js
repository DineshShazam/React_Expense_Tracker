import app from './app'
import colors from 'colors'


app.listen(process.env.PORT,console.log(`Application running in ${process.env.PORT}`.white.bold))