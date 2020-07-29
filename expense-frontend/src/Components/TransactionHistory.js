import React,{useContext} from "react";
import {GlobalContext} from '../GlobalContext/GlobalState';
import {TransactionList} from './TransactionList'

export const TransactionHistory = () => {

    //use the global-context 
       const {money} = useContext(GlobalContext)

  return (
    <div>
      <h3>History</h3> 
      <ul className="list">

    {money.map(val => (
        
        <TransactionList key={val.id} transaction={val}></TransactionList>

    ))}

        
      </ul>
    </div>
  );
};
