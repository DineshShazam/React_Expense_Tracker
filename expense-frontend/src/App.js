import React from 'react';
import './App.css';
import Header from './Components/Header'
import {Showbalance} from './Components/Showbalance'
import {Expense} from './Components/Expense'
import {TransactionHistory} from './Components/TransactionHistory'
import {AddTransaction} from './Components/AddTransaction'
import {GlobalProvider} from './GlobalContext/GlobalState'

function App() {
  return (
   
   <GlobalProvider>   
  <Header/>
  <Showbalance/>
  <Expense/>
  <TransactionHistory/>
  <AddTransaction/>
  </GlobalProvider>
 
  );
}

export default App;
