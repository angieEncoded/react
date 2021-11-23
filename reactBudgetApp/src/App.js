import React from 'react';
import ExpensesDisplay from './components/Expenses/ExpensesDisplay'
import NewExpense from "./components/NewExpense/NewExpense"

const App = () => {
  // dummy database table entry
  const expenses = [
    { id: "e1", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: "e2", title: "Cat Food", amount: 100, date: new Date(2021, 2, 12) },
    { id: "e3", title: "Giant", amount: 354.23, date: new Date(2021, 2, 14) },
    { id: "e4", title: "Thrive", amount: 124.65, date: new Date(2021, 2, 25) },
  ]

  return (
    <div>
      <NewExpense />
      <ExpensesDisplay data={expenses} />
    </div>
  );
}

export default App;
