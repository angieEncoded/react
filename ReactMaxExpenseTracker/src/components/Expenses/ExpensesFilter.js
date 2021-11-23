import React from 'react';
import './css/ExpensesFilter.css';


const ExpensesFilter = ({ currentlySelectedYear, onGetSelectedYear }) => {


    const onChangeYearHandler = (event) => {
        // Call the function that we took in as a prop from the Expensesjs
        onGetSelectedYear(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                {/* Set up two way binding to get a default year                 */}
                <select value={currentlySelectedYear} onChange={onChangeYearHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;