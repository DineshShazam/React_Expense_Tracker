import React,{useContext} from 'react'
import {GlobalContext} from '../GlobalContext/GlobalState'
import {numberWithCommas} from '../utils/format'

export const Expense = () => {

    const {money} = useContext(GlobalContext)

    const amount = money.map(val => val.amount)

    const Income = amount.filter(val => val > 0).reduce((acc,item)=>(acc+=item),0)

    const Expense = amount.filter(val => val < 0).reduce((acc,item)=>(acc+=item),0)
   

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">₹{numberWithCommas(Income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
    <p className="money minus">-₹{numberWithCommas(Math.abs(Expense))}</p>
        </div>
      </div>
    )
}
