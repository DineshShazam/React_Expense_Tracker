import React,{useContext} from 'react'
import {GlobalContext} from '../GlobalContext/GlobalState'
import {numberWithCommas} from '../utils/format'

export const Showbalance = () => {

    const {money} = useContext(GlobalContext)

   //take the amount
   const amount = money.map(val => val.amount)
    console.log(amount)
   const balance = amount.reduce((acc,item)=> (acc+=item),0)

    return (
        <div>
            
             <h4>Your Balance</h4>
             <h1>₹ {numberWithCommas(balance)}</h1>
        </div>
    )
}
