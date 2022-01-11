import React, { useState } from 'react';

const Transactions = () => {
    const [transactions,setTransactions] = useState([
        {
            type:"deposit",
            amount: 800,
            currency: "₦",
            description:"lorem ipsum"
        },
        {
            type:"withdrawal",
            amount: 800,
            currency: "₦",
            description:"lorem ipsum"
        },
        {
            type:"funded",
            amount: 800,
            currency: "₦",
            description:"lorem ipsum"
        },
        {
            type:"won",
            amount: 700,
            currency: "₦",
            description:"lorem ipsum"
        }
    ])
    const getAllTransactions = async () => {


            // return transactions
    }

    return {getAllTransactions, transactions}
}

export default Transactions;
