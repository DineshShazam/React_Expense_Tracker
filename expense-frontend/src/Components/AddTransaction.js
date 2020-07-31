import React,{useState,useContext} from "react";
import {GlobalContext} from '../GlobalContext/GlobalState'
import { v1 as uuidv4 } from 'uuid';

export const AddTransaction = () => {

     const {addTransaction} = useContext(GlobalContext)

    const [text,newText] = useState('')
    const [amount,newAmount] = useState(0)

    const onSubmit = e => {
      e.preventDefault();

        const newvalue = {
           id:uuidv4(),
            text,
            amount:+amount

        }
        addTransaction(newvalue)
        window.location.reload();

    }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text"  onChange={(e)=>newText(e.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" onChange={(e)=> newAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
