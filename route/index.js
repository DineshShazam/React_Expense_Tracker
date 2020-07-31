import express from 'express'
const router = express.Router()
import {addTransaction,deleteTransaction,getTransaction} from '../controller/transaction'


router.post('/addMoney',addTransaction).post('/deleteMoney/:id',deleteTransaction)

router.get('/showbalance',getTransaction)

export default router