import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial State
const initialState = {
  money: [],
  loading: true,
  error: null,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Global Provider
export const GlobalProvider = ({ children }) => {
  //Track action from all the component and update the state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  const getTransaction = async () => {
    await axios
      .get("/showBalance")
      .then((res) => {
        //since we gonna change the state send it to the appReducer
        dispatch({
          type: "GET",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err.response.data.error });
      });
  };

  const deleteTransaction = async (id) => {
   
    await axios.post(`/deleteMoney/${id}`).then((res) => {
      dispatch({
        type: "DELETE",
        id: id,
      });
    }).catch((err) => {
        dispatch({ type: "ERROR", payload: err.response.data.error });
    });
  };

  const addTransaction = async (value) => {

    //add header
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
   
    await axios.post('/addMoney',value,config)
                .then((val) => {
                    dispatch({
                        type:"ADD",
                        payload:val.data.data
                    })
                }).catch(err =>  dispatch({ type: "ERROR", payload: err.response.data.error }))
  };

  return (
    <GlobalContext.Provider
      value={{
        money: state.money,
        loading: state.loading, 
        error: state.error,
        getTransaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

//   [
//     { id: 1, text: 'Flower', amount: -20 },
//     { id: 2, text: 'Salary', amount: 300 },
//     { id: 3, text: 'Book', amount: -10 },
//     { id: 4, text: 'Camera', amount: 150 }
//   ]
