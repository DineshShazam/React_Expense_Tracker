import React,{useContext} from "react";
import {GlobalContext} from '../GlobalContext/GlobalState';

export const TransactionHistory = () => {

    //use the global-context 
       const {money} = useContext(GlobalContext)

  return (
    <div>
      <h3>History</h3> 
      <ul className="list">

    {money.map(val => (
        <li className="minus">
          {val.text} <span>{val.amount}</span>
          <button className="delete-btn">x</button>
        </li>

    ))}

        
      </ul>
    </div>
  );
};
