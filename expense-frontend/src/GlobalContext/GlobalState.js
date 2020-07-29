import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer'

// Initial State 
const initialState = {
    money: [
            { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
]
}

// Create Context
export const GlobalContext = createContext(initialState)

// Global Provider
export const GlobalProvider = ({children}) => {

    //Track action from all the component and update the state 
    const [state,dispatch] = useReducer(AppReducer,initialState)

    //Actions 
    const deleteTransaction = (id) => {
        dispatch({
            type:"DELETE",
            id:id
        })
    }

    const addTransaction = (value) => {
        console.log(value)
      dispatch({
          type:"ADD",
          payload:value
      })
    }
    
    return (
        <GlobalContext.Provider value={{
            money:state.money,
            deleteTransaction,
            addTransaction
        }}> 
            {children}
        </GlobalContext.Provider>
    )

}


// [
//     { id: 1, text: 'Flower', amount: -20 },
//     { id: 2, text: 'Salary', amount: 300 },
//     { id: 3, text: 'Book', amount: -10 },
//     { id: 4, text: 'Camera', amount: 150 }
//   ]