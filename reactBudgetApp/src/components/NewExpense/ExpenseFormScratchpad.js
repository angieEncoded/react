// Copy of the alternate forms of keeping track of state

import React, { useState } from 'react';
import "./ExpenseForm.css"

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] =
    //     useState({
    //         enteredTitle: '',
    //         enteredAmount: '',
    //         enteredDate: ''
    //     });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)

        // This way is not ideal
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // Pass in a function - this function will get the previous state and return the new state
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         enteredTitle: event.target.value
        //     }
        // })


        // console.log(userInput.enteredTitle)
        //console.log(enteredTitle)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         enteredAmount: event.target.value
        //     }
        // })


        //console.log(enteredAmount)
        //console.log(userInput.enteredAmount)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         enteredDate: event.target.value
        //     }
        // })
        // console.log(enteredDate)
        //console.log(userInput.enteredDate)
    }



    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input onChange={titleChangeHandler}
                        type="text" name="title" id="" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input onChange={amountChangeHandler} type="number" name="amount" min="0.01" step="0.01" id="" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input onChange={dateChangeHandler} type="date" name="date" min="2019-01-01" max="2022-12-31" id="" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )


}

export default ExpenseForm;
