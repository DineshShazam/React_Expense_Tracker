import mongoose from 'mongoose'

 const mongoDriver =  () => {

    return new Promise( async (resolve,reject) => {
        try {

           

            const connection = await mongoose.connect('mongodb+srv://devsociety:Dinesh@16@dev-society-0-qvzuo.mongodb.net/expense_tracker?retryWrites=true&w=majority',{
                useNewUrlParser:true,
                useUnifiedTopology:true
            });

            console.log(`MongoDB connected:${connection}`.cyan.bold)
            resolve(connection)

             
        } catch (error) {
            
            console.log(`Mongo Connection Error:${error}`)
            reject(error)
            process.exit(1)
        }
      
    })

}

export default mongoDriver