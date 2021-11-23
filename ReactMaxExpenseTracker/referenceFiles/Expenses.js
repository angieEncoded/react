import React, { useState } from 'react'
import ExpenseItem from '../src/components/Expenses/ExpenseItem'
import ExpensesFilter from "../src/components/Expenses/ExpensesFilter"
import Card from "../src/components/UI/Card"

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020')

    const getSelectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        //console.log(filteredYear)
    }

    // filter out the years we don't want based on the state
    const data = props.data.filter((item) => item.date.getFullYear().toString() === filteredYear)
    //console.log(data)

    // We can also store html content in a variable. It's just a string after all.
    let expensesContent = <p>No Expenses Found</p>;
    if (data.length > 0) {
        expensesContent = data.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)
    }


    return (
        <div>

            <Card className="expenses">
                {/* Remember, what you pass through as the PROP is the name you execute on the other side */}
                {/* It just POINTS to the named function */}
                <ExpensesFilter currentlySelectedYear={filteredYear} onGetSelectedYear={getSelectedYearHandler} />

                {/* We can use a javascript trick to break up long ternary statements into these - ternary way is below */}
                {/* The part after && is executed if the part before is evalutated to true */}
                {/* {data.length === 0 && <p>"No expenses Found!" </p>}
                {data.length > 0 && data.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)} */}

                {/* // This way gives us a very lean jsx snippet */}
                {expensesContent}

                {/* Render the list using map - if you use curly braces you have to use return explicitly*/}
                {/* Make sure that you have a key prop with the id to make sure that the lists are rendered quickly */}
                {/* {props.data.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)} */}
                {/* {data.length === 0 ? (<p>"No expenses Found!" </p>) : (data.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />))} */}






            </Card>
        </div>
    )
}

export default Expenses;