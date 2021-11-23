// First thing to do is to import the useState function from react
import React, { useState } from 'react'
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/css/Expenses.css"
import NewExpense from "./components/NewExpense/NewExpense"

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];










const App = () => {

  // Now set the state with its initial default state. In this case, it's the dummy expenses array we created
  // We always get two items back we can destructure, the expenses variable, and a function to set the state
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  // We can create a function that handles updating the state
  const addExpenseHandler = (expense) => {

    // We must use this anonymous function to update the state IF it relies on the previous state
    // We automatically get the previous state from react
    setExpenses((previousExpensesState) => {
      // This function will return the state and everything will automatically update
      // This takes the new expense, and then spreads the old array of items
      return [expense, ...previousExpensesState]
    });
  }


  return (
    <div>
      <NewExpense addNewExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>


  );
}




export default App;
