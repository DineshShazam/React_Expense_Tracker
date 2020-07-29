import React,{useContext} from 'react'
import {GlobalContext} from '../GlobalContext/GlobalState'

export const TransactionList = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? "-":""
    return (
        <div>
            <li  className={transaction.amount < 0 ? "minus":"plus" }>
               
         {transaction.text} <span className={transaction.amount > 0 ? "money plus":"money minus"} >₹{sign}{Math.abs(transaction.amount)}</span>
          <button onClick={() => {deleteTransaction(transaction.id)} } className="delete-btn">x</button>
        </li>
        </div>
    )
}
