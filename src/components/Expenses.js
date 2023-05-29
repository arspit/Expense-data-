
import Card from './UI/Card';
import  './Expense.css';
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';
import  React, { useState } from 'react'
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
   
const [filteredYear,setFilteredYear] = useState('2020');

function filterchangehandler (selectedYear) {
  setFilteredYear(selectedYear)
}

const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
});

    return (
<div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterchangehandler}
        />
        <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
         <ExpensesList items={filteredExpenses} />
        
      </Card>
    </div>  
    
    ); 
}
export default Expenses;