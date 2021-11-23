import React from 'react'
import './css/ExpenseItem.css';
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

// You get one object - the object 'props' but can destructure
// If you use props you have to do props.whateverTheThingIs
const ExpenseItem = (props) => {

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
