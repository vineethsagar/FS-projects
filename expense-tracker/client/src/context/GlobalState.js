import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from "axios"
// Initial state
const initialState = {
  transactions: [],
  errors :null,
  loading : true
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer,initialState);

  // Actions
  async function deleteTransaction(id) {
    try {
      await axios.delete(`https://expense-tracker-mvs.herokuapp.com/api/v1/transactions/${id}`)
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    } catch (error) {
      dispatch({
        type:'TRANSACTION_ERROR',
        payload:error.res.data.error
      });
    }
  }

  async function addTransaction(transaction) {
    const config= {
      headers:{
        'Content-type':'application/json'
      }
    }

    try {
      const res = await axios.post('https://expense-tracker-mvs.herokuapp.com/api/v1/transactions',transaction,config);
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type:'TRANSACTION_ERROR',
        payload:error.res.data.error
      });
    }
    
  }

  async function getTransactions(){
    try{
      const res = await axios.get("https://expense-tracker-mvs.herokuapp.com/api/v1/transactions");
      dispatch({
        type:'GET_TRANSACTIONS',
        payload:res.data.data
      });
    }catch(error){
      dispatch({
        type:'TRANSACTION_ERROR',
        payload:error.res.data.error
      });
    }
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
    getTransactions,
    error:state.error,
    loading:state.loading,
  }}>
    {children}
  </GlobalContext.Provider>);
}