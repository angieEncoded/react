import React, { useState } from 'react'
import ExpensesFilter from "./ExpensesFilter"
import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const getSelectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        //console.log(filteredYear)
    }

    // filter out the years we don't want based on the state
    const data = props.data.filter((item) => item.date.getFullYear().toString() === filteredYear)
    //console.log(data)


    return (
        <div>
            <Card className="expenses">
                {/* Remember, what you pass through as the PROP is the name you execute on the other side */}
                {/* It just POINTS to the named function */}
                <ExpensesFilter currentlySelectedYear={filteredYear} onGetSelectedYear={getSelectedYearHandler} />

                <ExpensesChart expenses={data} />
                {/* Pass the filtered list through to the Expenses List component */}
                <ExpensesList data={data} />
            </Card>
        </div>
    )
}

export default Expenses;