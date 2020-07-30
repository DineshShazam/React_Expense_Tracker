import mongoose, { Mongoose } from 'mongoose'

//@desc Transaction Collection kindaa Table 
 const Transaction = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'Please add the reason for spending']
    },
    amount:{
        type:Number,
        required:[true,'Enter the amount']
    },
    CreatedAt: {
        type:Date,
        default:Date.now
    }
})

export default mongoose.model('Transaction',Transaction)  //first parameter table name and the second one is the schema for teh table name 