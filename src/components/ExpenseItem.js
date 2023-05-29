import Card from './UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {
function clickHandler(){setTitle('its changed'); console.log('updated')} 
 
const [title,setTitle] = useState (props.title); 

  return (
        <Card className="expense-item">
            <ExpenseDate date ={props.date}></ExpenseDate>
            <div className="expense-item__description"><h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    );
}

export default ExpenseItem;         


