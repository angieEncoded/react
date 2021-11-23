import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
import Card from '../UI/Card'

// we only get ONE parameter coming in. React automatically puts it in one object
const ExpenseItem = (props) => {
    // useState returns an array
    // [0] is the value of the prop
    // [1] is a function that we can use to update that value
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('New Title')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* do NOT use the () in here */}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )

}

export default ExpenseItem;