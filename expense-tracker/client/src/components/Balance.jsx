import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    console.log(transactions)
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
    <>
        <h3>Your Balance</h3>
    <h1 className={total>=0 ?"money plus":"money minus"} >{total>=0?'':'-'}₹{(Math.abs(total)).toLocaleString('en-IN', { maximumSignificantDigits: 3 })}</h1>
    </>
    )
}