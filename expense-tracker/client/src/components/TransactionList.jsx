import React,{useContext,useEffect} from 'react'
import {GlobalContext} from "../context/GlobalState"
import {Transaction} from "./Transaction"


export const TransactionList = () => {
    const {transactions,getTransactions} = useContext(GlobalContext);
    //console.log(transactions);
    useEffect(() => {
        getTransactions()
        return () => {
        }
    }, [])
    
    return (
        <div className="history">
        <h3>History</h3>
        <div className="list-container">
        <ul className="list">
        {transactions.map((transaction)=>(
                <Transaction transaction={transaction} key={transaction.id}/>
        ))}
        </ul>
        </div>
        
        </div>
    )
}
