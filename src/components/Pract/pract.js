import { useState } from "react/cjs/react.development"

const DUMMYExpenses = [
    {title:'food',amount : 22,date : new Date(22,4,2022)},
    {title:'travel',amount : 43.1,date : new Date(2022,12,2)},
    {title:'stay',amount : 75.1,date : new Date(2022,12,2)},
    {title:'party',amount : 24.1,date : new Date(2022,12,2)},
]

const  Prac = () => {

 const[expense,setExpense]=useState(DUMMYExpenses)

const expenseHandler = (expense) => {
    setExpense((prevExpenses) => {
        return[expense,...prevExpenses]
    })
}

    return ( <div>
        <Expenses onChange={expenseHandler}/>
    </div>
    )
}