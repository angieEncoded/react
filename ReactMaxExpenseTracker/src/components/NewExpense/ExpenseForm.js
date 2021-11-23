import React, { useState } from 'react'
import "./css/NewExpenseForm.css"

const ExpenseForm = (props) => {

    // Set the state for all the inputs so we store the data
    // by default the onChange event will always be in as a string
    // Even if it's a number, it will be a string as a number
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    // Set up the handlers that put the values into the state
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // Listen to the form's submit event, NOT the buttom
    // Then we can create the object from the 'state' items we have above
    const submitHandler = (event) => {
        event.preventDefault();

        // Gather the data from the state objects
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount, // force a number conversion
            date: new Date(enteredDate)
        }

        // The NewExpense custom object has a property which is a function that we
        // can now use to send the form data to to NewExpense.js, the first hop in the chain
        props.onSaveExpenseData(expenseData);

        // Clear the inputs after we've grabbed the data
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
        //console.log(expenseData);


    }




    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    {/* This is two-way binding. If we use value={enteredTitle we can now listen for changes in the state} */}
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.closeForm}>Close Form</button>
                <button type="submit">Add Expense</button>

            </div>
        </form>









    )
}

export default ExpenseForm

// Alternatively, you can use a single state slice (and it depends on preference)
// const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
// });

// setUserInput({
//     ...userInput, // We would have to manage state for all the items
//     enteredTitle: event.target.value, // and then override the individual we wanted to update

// })

// However handling it as above is a bad practice. Instead, pass in a function with the previous state
// setUserInput((previousState) => {
//     return { ...previousState, enteredTitle: event.target.value }
// })

// React schedules state updates. So with the first approach you might be working with an outdated state




