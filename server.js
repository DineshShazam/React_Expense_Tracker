import app from './app'
import colors from 'colors'


app.listen(process.env.PORT || 5000,console.log(`Application running in ${process.env.PORT || 5000}`.white.bold))