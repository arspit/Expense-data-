
import React,{ useState } from 'react/cjs/react.development';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES =
[
  {
    title: 'car insurance',
    amount: 294.67,
    date: new Date(2021, 3, 24)
  },
  {
    title: 'bike insurance',
    amount: 100.67,
    date: new Date(2021, 3, 26)
  },
  {
    title: 'auto insurance',
    amount: 500.67,
    date: new Date(2021, 3, 27) 
  },
  {
    title: 'cycle insurance',
    amount: 29.67,
    date: new Date(2021, 3, 29)
  }
]


const  App = () => {

 const [expenses,setExpenses] =  useState(DUMMY_EXPENSES);

  
  
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  
    return (
    <div>
    <NewExpense onAddExpense ={addExpenseHandler}></NewExpense>
     <Expenses  items={expenses} ></Expenses>
    
    </div>
  );
}
export default App;

