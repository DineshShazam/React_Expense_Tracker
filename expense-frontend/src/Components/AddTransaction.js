import React,{useState} from "react";

export const AddTransaction = () => {

    const [text,newText] = useState('')
    const [amount,newAmount] = useState(0)

  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input value={text} onChange={(e)=>newText(e.target.value)} type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input value={amount} onChange={(e)=> newAmount(e.target.value)} type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
