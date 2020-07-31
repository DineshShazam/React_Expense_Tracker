import React,{useContext,useEffect} from "react";
import {GlobalContext} from '../GlobalContext/GlobalState';
import {TransactionList} from './TransactionList'

export const TransactionHistory = () => {

    //use the global-context 
       const {money, getTransaction} = useContext(GlobalContext)

    //if we are making any HTTP request from component we have to use USEEFECT 
      useEffect(() =>{getTransaction()},[])

  return (
    <div>
      <h3>History</h3> 
      <ul className="list">

    {money.map(val => (
        
        <TransactionList key={val._id} transaction={val}></TransactionList>

    ))}

        
      </ul>
    </div>
  );
};
