import React, { useState } from 'react';
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        //console.log(enteredTitle)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        //console.log(enteredAmount)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        //console.log(enteredDate)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseDate = { title: enteredTitle, amount: enteredAmount, date: new Date(enteredDate) }
        props.onSaveExpenseData();

        // Clear out those values again after submission
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input onChange={titleChangeHandler}
                        value={enteredTitle}
                        type="text" name="title" id="" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    {/* Adding value here in this way makes this have two-way binding*/}
                    <input onChange={amountChangeHandler} value={enteredAmount} type="number" name="amount" min="0.01" step="0.01" id="" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input onChange={dateChangeHandler} value={enteredDate} type="date" name="date" min="2019-01-01" max="2022-12-31" id="" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )


}

export default ExpenseForm;
