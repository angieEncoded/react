import React, { useState } from 'react'
import "./css/NewExpense.css"
import ExpenseForm from "./ExpenseForm"


const NewExpense = ({ addNewExpense }) => {

    const [formState, formStateToggle] = useState(true);
    const toggleForm = () => {
        formStateToggle(!formState);
        //console.log(formState)
    }

    // This function is expecting the entered values
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
        //console.log(expenseData)

        // Pass this adjusted data through to App.js, the final hop in the chain
        addNewExpense(expenseData);
        formStateToggle(!formState);
    }


    return (
        <div className="new-expense">

            {formState && <button onClick={toggleForm}>Add New Expense</button>}
            {!formState && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm={toggleForm} />}


            {/* Put the button here instead */}

        </div>
    )
}

export default NewExpense

